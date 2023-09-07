const unite_beneficiaireModel = require("../models/unite_beneficiaire.model");

const getUnite_beneficiaires = async (req, res) => {
  try {
    const unite_beneficiaires = await unite_beneficiaireModel.find();
    res.json({ data: unite_beneficiaires, code: 200, message: "ok" });
  } catch (error) {
    res.json({ message: err, code: 500 });
  }
};
const createUnite_beneficiaire = async (req, res) => {
  try {
    const unite_beneficiaire = new unite_beneficiaireModel(req.body);
    const result = await unite_beneficiaire.save();
    if (result) {
      res.json({
        message: "unite_beneficiaire " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation" });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateUnite_beneficiaire = async (req, res) => {
  try {
    await unite_beneficiaireModel.findByIdAndUpdate(req.params.id);
    res.json({ message: "updated successfully", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneUnite_beneficiaire = async (req, res) => {
  try {
    const unite_beneficiaire = await unite_beneficiaireModel.findById(
      req.params.id
    );
    res.json({ data: unite_beneficiaire, message: "ok", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteUnite_beneficiaire = async (req, res) => {
  try {
    await unite_beneficiaireModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

module.exports = {
  getUnite_beneficiaires,
  createUnite_beneficiaire,
  getOneUnite_beneficiaire,
  updateUnite_beneficiaire,
  deleteUnite_beneficiaire,
};
