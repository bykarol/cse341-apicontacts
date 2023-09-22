const { getDatabase } = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res) => {
  const result = await getDatabase().db().collection('contacts').find();
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json")
      .status(200).json(contacts);
  });
}

const getContactbyId = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await getDatabase().db().collection("contacts").find({ _id: userId });
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json")
      .status(200).json(contacts[0]);
  })
}

module.exports = {
  getAllContacts,
  getContactbyId
}