
const Patient=require('../models/patientList')
const Authorization=require('../models/authmodel')

const addApatient=async(req,res)=>{
    try {
        const { name, age, medicalHistory, treatmentPlan } = req.body;
        const newPatient = new Patient({
          name,
          age,
          medicalHistory,
          treatmentPlan
        });
        await newPatient.save();
        res.status(201).json(newPatient);
      } catch (error) {
        res.status(500).json({ message: 'Error adding patient', error });
      }
}
const getAllPatients=async(req,res)=>{
        try {
          const patients = await Patient.find();
          res.status(200).json(patients);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching patients', error });
        }
}
const getOnePatientInfo=async(req,res)=>{
    try {
        const patientId=req.params.patientID
      const patients = await Patient.findById(patientId);
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching patients', error });
    }
}
const createAuthorization = async (req, res) => {
    try {
      const { patientId, treatment, doctorNotes } = req.body;
      const newAuthorization = new Authorization({
        patientId,
        treatment,
        doctorNotes,
      });
      await newAuthorization.save();
      res.status(201).json(newAuthorization);
    } catch (error) {
      res.status(500).json({ message: 'Error creating authorization request', error });
    }
  };
  const getAllAuthorizations = async (req, res) => {
    try {
      const authorizations = await Authorization.find().populate('patientId');
      res.json(authorizations);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching authorization requests', error });
    }
  }; const getAllAuthorizationsOfpatient = async (req, res) => {
    try {
        const patientId=req.params.patientID
      const authorizations = await Authorization.find({patientId:patientId}).populate('patientId');
      res.json(authorizations);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching authorization requests', error });
    }
  };

module.exports = {getAllPatients,addApatient,createAuthorization,getAllAuthorizations,getOnePatientInfo,getAllAuthorizationsOfpatient};
