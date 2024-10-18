const mongoose = require('mongoose');

const authorizationSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  doctorNotes: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'denied'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports  = mongoose.model('Authorization', authorizationSchema);

