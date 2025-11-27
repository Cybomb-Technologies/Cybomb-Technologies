import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Search, 
  Filter, 
  Download, 
  RefreshCw,
  Calendar,
  DollarSign,
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  CreditCard,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';
import styles from './payment-user.module.css';

const PaymentUser = ({ paymentUsers, onPaymentUsersUpdate, onRefresh }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Initialize with props or fetch data
  useEffect(() => {
    if (paymentUsers && paymentUsers.length > 0) {
      setOrders(paymentUsers);
      setLoading(false);
    } else {
      fetchOrders();
    }
  }, [paymentUsers]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/web-payment/orders`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchOrders();
    if (onRefresh) onRefresh();
  };

  const handleViewDetails = async (orderId) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/web-payment/orders/${orderId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSelectedOrder(data.data);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  // Filter orders based on search and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerDetails?.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerDetails?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.packageDetails?.planName?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.paymentDetails?.paymentStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { class: styles.statusCompleted, icon: <CheckCircle size={14} />, text: 'Paid' },
      pending: { class: styles.statusPending, icon: <Clock size={14} />, text: 'Pending' },
      failed: { class: styles.statusFailed, icon: <XCircle size={14} />, text: 'Failed' },
      cancelled: { class: styles.statusCancelled, icon: <XCircle size={14} />, text: 'Cancelled' }
    };

    const config = statusConfig[status] || statusConfig.pending;
    
    return (
      <span className={`${styles.statusBadge} ${config.class}`}>
        {config.icon}
        {config.text}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatPrice = (amount, currency = 'INR') => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
    return formatter.format(amount);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading payment data...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>Payment Users</h2>
          <p className={styles.subtitle}>
            Manage and view all payment transactions and customer orders
          </p>
        </div>
        <div className={styles.headerActions}>
          <button 
            className={styles.refreshButton}
            onClick={handleRefresh}
            disabled={loading}
          >
            <RefreshCw size={18} className={loading ? styles.spinning : ''} />
            Refresh
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by order ID, name, email, or plan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.filterGroup}>
          <Filter size={16} />
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All Status</option>
            <option value="completed">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className={styles.stats}>
          <span className={styles.statItem}>
            Total: <strong>{orders.length}</strong>
          </span>
          <span className={styles.statItem}>
            Paid: <strong>{orders.filter(o => o.paymentDetails?.paymentStatus === 'completed').length}</strong>
          </span>
        </div>
      </div>

      {/* Table Section */}
      <div className={styles.tableContainer}>
        {filteredOrders.length === 0 ? (
          <div className={styles.emptyState}>
            <CreditCard size={48} className={styles.emptyIcon} />
            <h3>No payment records found</h3>
            <p>No payment orders match your current filters.</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {filteredOrders.map((order) => (
                <tr key={order._id} className={styles.tableRow}>
                  <td className={styles.orderId}>
                    {order.orderId}
                  </td>
                  <td>
                    <div className={styles.customerCell}>
                      <strong>{order.customerDetails?.fullName}</strong>
                      <span>{order.customerDetails?.email}</span>
                    </div>
                  </td>
                  <td>
                    <span className={styles.planBadge}>
                      {order.packageDetails?.planName}
                    </span>
                  </td>
                  <td className={styles.amount}>
                    {formatPrice(order.packageDetails?.totalAmount, order.packageDetails?.currency)}
                  </td>
                  <td>
                    {getStatusBadge(order.paymentDetails?.paymentStatus)}
                  </td>
                  <td className={styles.date}>
                    {formatDate(order.createdAt)}
                  </td>
                  <td>
                    <button
                      className={styles.viewButton}
                      onClick={() => handleViewDetails(order._id)}
                      title="View Details"
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal for Order Details */}
      {showModal && selectedOrder && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Order Details - {selectedOrder.orderId}</h3>
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
            </div>

            <div className={styles.modalContent}>
              {/* Customer Details */}
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>
                  <User size={18} />
                  Customer Information
                </h4>
                <div className={styles.detailsGrid}>
                  <div className={styles.detailItem}>
                    <strong>Full Name:</strong>
                    <span>{selectedOrder.customerDetails?.fullName}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Email:</strong>
                    <span>{selectedOrder.customerDetails?.email}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Phone:</strong>
                    <span>{selectedOrder.customerDetails?.phone}</span>
                  </div>
                  {selectedOrder.customerDetails?.company && (
                    <div className={styles.detailItem}>
                      <strong>Company:</strong>
                      <span>{selectedOrder.customerDetails.company}</span>
                    </div>
                  )}
                  <div className={styles.detailItem}>
                    <strong>Address:</strong>
                    <span>
                      {selectedOrder.customerDetails?.address}, {selectedOrder.customerDetails?.city} - {selectedOrder.customerDetails?.pincode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>
                  <Package size={18} />
                  Package Details
                </h4>
                <div className={styles.detailsGrid}>
                  <div className={styles.detailItem}>
                    <strong>Plan Type:</strong>
                    <span className={styles.planType}>
                      {selectedOrder.packageDetails?.planType}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Plan Name:</strong>
                    <span>{selectedOrder.packageDetails?.planName}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Base Price:</strong>
                    <span>{formatPrice(selectedOrder.packageDetails?.basePrice, selectedOrder.packageDetails?.currency)}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>GST Amount:</strong>
                    <span>{formatPrice(selectedOrder.packageDetails?.gstAmount, selectedOrder.packageDetails?.currency)}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Total Amount:</strong>
                    <span className={styles.totalAmount}>
                      {formatPrice(selectedOrder.packageDetails?.totalAmount, selectedOrder.packageDetails?.currency)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>
                  <CreditCard size={18} />
                  Payment Information
                </h4>
                <div className={styles.detailsGrid}>
                  <div className={styles.detailItem}>
                    <strong>Payment Status:</strong>
                    {getStatusBadge(selectedOrder.paymentDetails?.paymentStatus)}
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Payment Method:</strong>
                    <span>{selectedOrder.paymentDetails?.paymentMethod}</span>
                  </div>
                  {selectedOrder.paymentDetails?.transactionId && (
                    <div className={styles.detailItem}>
                      <strong>Transaction ID:</strong>
                      <span>{selectedOrder.paymentDetails.transactionId}</span>
                    </div>
                  )}
                  {selectedOrder.paymentDetails?.paidAt && (
                    <div className={styles.detailItem}>
                      <strong>Paid At:</strong>
                      <span>{formatDate(selectedOrder.paymentDetails.paidAt)}</span>
                    </div>
                  )}
                  <div className={styles.detailItem}>
                    <strong>Email Sent:</strong>
                    <span className={selectedOrder.paymentDetails?.emailSent ? styles.emailSent : styles.emailNotSent}>
                      {selectedOrder.paymentDetails?.emailSent ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              {selectedOrder.customerDetails?.requirements && (
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>
                    <Mail size={18} />
                    Project Requirements
                  </h4>
                  <div className={styles.requirements}>
                    {selectedOrder.customerDetails.requirements}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.closeModalButton} onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentUser;