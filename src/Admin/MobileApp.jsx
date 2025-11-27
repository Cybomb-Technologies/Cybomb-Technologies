import React, { useEffect, useState } from "react";
import styles from './MobileApp.module.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function MobileApp() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", imageUrl: "", appUrl: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchApps();
  }, []);

  async function fetchApps(query = "") {
    setLoading(true);
    try {
      const url = `${API_BASE_URL}/api/apps${query ? `?search=${encodeURIComponent(query)}` : ""}`;
      const res = await fetch(url);
      const data = await res.json();
      setApps(data);
    } catch (e) {
      console.error(e);
      setError("Could not load apps");
    } finally {
      setLoading(false);
    }
  }

  function openAddModal() {
    setEditingId(null);
    setForm({ name: "", imageUrl: "", appUrl: "" });
    setShowModal(true);
  }

  function openEditModal(app) {
    setEditingId(app._id);
    setForm({ name: app.name || "", imageUrl: app.imageUrl || "", appUrl: app.appUrl || "" });
    setShowModal(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.appUrl.trim()) {
      setError("Please fill required fields (name & app url).");
      return;
    }
    try {
      const method = editingId ? "PUT" : "POST";
      const endpoint = editingId ? `${API_BASE_URL}/api/apps/${editingId}` : `${API_BASE_URL}/api/apps`;
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Server error");
      }
      await fetchApps(search);
      setShowModal(false);
      setForm({ name: "", imageUrl: "", appUrl: "" });
      setEditingId(null);
    } catch (err) {
      console.error(err);
      setError(err.message || "Submit failed");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this app?")) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/apps/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await fetchApps(search);
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  }

  function handleSearchChange(e) {
    const v = e.target.value;
    setSearch(v);
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    await fetchApps(search);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
          <input
            value={search}
            onChange={handleSearchChange}
            placeholder="Search apps by name..."
            className={styles.searchInput}
          />
          <button type="submit" className={`${styles.button} ${styles.primaryButton}`}>
            Search
          </button>
        </form>

        <button onClick={openAddModal} className={`${styles.button} ${styles.addButton}`}>
          Add New App
        </button>
      </div>

      <h1 className={styles.title}>Mobile App Administration</h1>
      <p className={styles.subtitle}>Manage your mobile application settings and links</p>

      {loading ? (
        <div className={styles.loading}>Loading applications...</div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>App URL</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {apps.length === 0 && (
              <tr>
                <td colSpan="5" className={styles.emptyState}>
                  <div className={styles.emptyStateIcon}>📱</div>
                  No applications found
                </td>
              </tr>
            )}
            {apps.map((a) => (
              <tr key={a._id}>
                <td>{a.name}</td>
                <td>
                  {a.imageUrl ? (
                    <img src={a.imageUrl} alt={a.name} className={styles.appImage} />
                  ) : (
                    <span style={{ color: "#666" }}>—</span>
                  )}
                </td>
                <td>
                  <a href={a.appUrl} target="_blank" rel="noreferrer" className={styles.appLink}>
                    {a.appUrl}
                  </a>
                </td>
                <td>{new Date(a.createdAt).toLocaleString()}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button 
                      onClick={() => openEditModal(a)} 
                      className={`${styles.button} ${styles.secondaryButton}`}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(a._id)} 
                      className={`${styles.button} ${styles.dangerButton}`}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>
              {editingId ? "Edit Application" : "Add New Application"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>App Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  className={styles.formInput}
                  placeholder="Enter application name"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Image URL</label>
                <input
                  value={form.imageUrl}
                  onChange={(e) => setForm((s) => ({ ...s, imageUrl: e.target.value }))}
                  className={styles.formInput}
                  placeholder="https://example.com/image.png"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>App Link (URL) *</label>
                <input
                  value={form.appUrl}
                  onChange={(e) => setForm((s) => ({ ...s, appUrl: e.target.value }))}
                  className={styles.formInput}
                  placeholder="https://example.com/app"
                />
              </div>

              {error && <div className={styles.errorMessage}>{error}</div>}

              <div className={styles.modalActions}>
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)} 
                  className={`${styles.button} ${styles.secondaryButton}`}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                  {editingId ? "Save Changes" : "Add Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileApp;