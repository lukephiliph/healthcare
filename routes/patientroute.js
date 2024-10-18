const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controllers');

// Route to get all patients
router.get('/patients', Controller.getAllPatients);

// Route to add a new patient (optional)
router.post('/patients', Controller.addApatient);

router.get('/getApatient/:patientID',Controller.getOnePatientInfo)

// Route to get all authorization requests
router.get('/authorizations', Controller.getAllAuthorizations);

router.get('/authorizations/:patientID', Controller.getAllAuthorizationsOfpatient);

// Route to submit a prior authorization request
router.post('/authorizations', Controller.createAuthorization);


module.exports = router;
