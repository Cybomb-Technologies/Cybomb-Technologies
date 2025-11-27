const PDFDocument = require('pdfkit');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Recursive function to generate PDF invoice
const generateInvoicePDF = (orderData, customerDetails, retryCount = 0) => {
  return new Promise((resolve, reject) => {
    try {
      const maxRetries = 3;
      const doc = new PDFDocument({ margin: 50 });
      const buffers = [];
      
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfData = Buffer.concat(buffers);
        resolve(pdfData);
      });

      const { orderId, planName, amount, currency = 'INR' } = orderData;
      const subtotal = Math.round(amount / 1.18);
      const gstAmount = amount - subtotal;
      const currencySymbol = currency === 'INR' ? '₹' : '$';
      const currentDate = new Date().toLocaleDateString('en-IN');

      // Add header
      doc.fillColor('#6366f1')
         .rect(0, 0, doc.page.width, 120)
         .fill();
      
      doc.fillColor('white')
         .fontSize(24)
         .font('Helvetica-Bold')
         .text('CYBOMB TECHNOLOGIES', 50, 40);
      
      doc.fontSize(12)
         .text('Web Development Services', 50, 70);
      
      doc.fontSize(10)
         .text('Invoice', 50, 90);

      // Invoice details
      doc.fillColor('black')
         .fontSize(20)
         .font('Helvetica-Bold')
         .text('INVOICE', 400, 40);
      
      doc.fontSize(10)
         .font('Helvetica')
         .text(`Invoice #: ${orderId}`, 400, 70);
      
      doc.text(`Date: ${currentDate}`, 400, 85);
      
      doc.text(`Status: PAID`, 400, 100);

      // From and To sections
      const fromX = 50;
      const toX = 300;
      const infoY = 150;

      // From section
      doc.fontSize(12)
         .font('Helvetica-Bold')
         .text('From:', fromX, infoY);
      
      doc.font('Helvetica')
         .fontSize(10)
         .text('Cybomb Technologies', fromX, infoY + 20)
         .text('santhosh@cybomb.com', fromX, infoY + 35)
         .text('+91 9876543210', fromX, infoY + 50)
         .text('Chennai, Tamil Nadu', fromX, infoY + 65);

      // To section
      doc.font('Helvetica-Bold')
         .text('Bill To:', toX, infoY);
      
      doc.font('Helvetica')
         .text(customerDetails.fullName, toX, infoY + 20)
         .text(customerDetails.email, toX, infoY + 35)
         .text(`+91 ${customerDetails.phone}`, toX, infoY + 50);
      
      if (customerDetails.company) {
        doc.text(customerDetails.company, toX, infoY + 65);
      }
      
      doc.text(`${customerDetails.address}, ${customerDetails.city} - ${customerDetails.pincode}`, toX, infoY + 80);

      // Line separator
      doc.moveTo(50, 250)
         .lineTo(doc.page.width - 50, 250)
         .strokeColor('#cccccc')
         .stroke();

      // Table header
      const tableTop = 270;
      doc.font('Helvetica-Bold')
         .fontSize(10)
         .text('Description', 50, tableTop)
         .text('Amount', 400, tableTop, { align: 'right' });

      // Table content
      doc.font('Helvetica')
         .text(`${planName} Web Development Package`, 50, tableTop + 25)
         .text(`${currencySymbol}${subtotal.toLocaleString('en-IN')}`, 400, tableTop + 25, { align: 'right' });
      
      doc.text('GST (18%)', 50, tableTop + 45)
         .text(`${currencySymbol}${gstAmount.toLocaleString('en-IN')}`, 400, tableTop + 45, { align: 'right' });

      // Total line
      doc.moveTo(50, tableTop + 70)
         .lineTo(doc.page.width - 50, tableTop + 70)
         .stroke();
      
      doc.font('Helvetica-Bold')
         .text('TOTAL', 50, tableTop + 80)
         .text(`${currencySymbol}${amount.toLocaleString('en-IN')}`, 400, tableTop + 80, { align: 'right' });

      // Payment status
      doc.fillColor('#10b981')
         .text('PAYMENT SUCCESSFUL', 50, tableTop + 110)
         .fillColor('black')
         .font('Helvetica')
         .text(`Paid on: ${currentDate}`, 50, tableTop + 125);

      // Notes section
      const notesY = tableTop + 160;
      doc.font('Helvetica-Bold')
         .text('Important Notes:', 50, notesY);
      
      doc.font('Helvetica')
         .fontSize(9)
         .text('• This is an official invoice for payment received.', 50, notesY + 20)
         .text('• Please keep this invoice for your records.', 50, notesY + 35)
         .text('• Your project timeline: 7-10 working days.', 50, notesY + 50)
         .text('• Contact support@cybomb.com for any queries.', 50, notesY + 65);

      // Footer
      const footerY = doc.page.height - 100;
      doc.fontSize(8)
         .text('Thank you for choosing Cybomb Technologies', 50, footerY, { align: 'center' })
         .text('support@cybomb.com | +91 9876543210 | www.cybomb.com', 50, footerY + 15, { align: 'center' })
         .text('This is a computer-generated invoice. No signature required.', 50, footerY + 30, { align: 'center' });

      doc.end();

    } catch (error) {
      if (retryCount < maxRetries) {
        console.log(`Retrying PDF generation... Attempt ${retryCount + 1}`);
        setTimeout(() => {
          generateInvoicePDF(orderData, customerDetails, retryCount + 1)
            .then(resolve)
            .catch(reject);
        }, 1000);
      } else {
        reject(new Error(`Failed to generate PDF after ${maxRetries} attempts: ${error.message}`));
      }
    }
  });
};

// Recursive function to save PDF temporarily (if needed)
const savePDFToTemp = async (pdfBuffer, filename, retryCount = 0) => {
  const maxRetries = 3;
  
  try {
    const tempDir = path.join(__dirname, '../temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    const filePath = path.join(tempDir, filename);
    fs.writeFileSync(filePath, pdfBuffer);
    return filePath;
  } catch (error) {
    if (retryCount < maxRetries) {
      console.log(`Retrying PDF save... Attempt ${retryCount + 1}`);
      return savePDFToTemp(pdfBuffer, filename, retryCount + 1);
    }
    throw error;
  }
};

module.exports = {
  generateInvoicePDF,
  savePDFToTemp
};