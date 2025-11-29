import Contact from '../models-new/Contact.js';
import Notification from '../models-new/Notification.js';
// contactController.js - Updated createContact function
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message, subscribe, source, referralSource } = req.body; 
    
    const contact = new Contact({
      name,
      email,
      phone: phone || '',
      message,
      subscribe: subscribe || false,
      source: source || 'website',
      referralSource: referralSource || '',
      formType: req.body.formType || 'contact'
    });

    // 1️⃣ Save contact
    await contact.save();

    // 2️⃣ Create notification ONLY on creation
    await Notification.create({
      title: "New Contact Form Submitted",
      message: `${name} submitted a contact form.`,
      type: "cybomb-contact",
      relatedId: contact._id
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact
    });

  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get all contacts (Admin only)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get single contact by ID (Admin only)
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Delete contact (Admin only)
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};