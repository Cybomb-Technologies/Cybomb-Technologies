// Contact.js - Updated version
import mongoose from 'mongoose';

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      required: true,
    },
    subscribe: {
      type: Boolean,
      default: false,
    },
    source: {
      type: String,
      default: 'website',
    },
    formType: {
      type: String,
      default: 'contact', // 'contact' or 'homepage'
    },
    referralSource: {
      type: String,
      default: '',
    }
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;