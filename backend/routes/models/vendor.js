const mongoose = require('mongoose');

const vendorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  vendorName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Vendor', vendorSchema);