const { getDatabase } = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res) => {
  //#swagger.tags=["contacts"]
  const result = await getDatabase().db().collection('contacts').find();
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json")
      .status(200).json(contacts);
  });
}

const getContactbyId = async (req, res) => {
  //#swagger.tags=["contacts"]
  const userId = new ObjectId(req.params.id);
  const result = await getDatabase().db().collection("contacts").find({ _id: userId });
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json")
      .status(200).json(contacts[0]);
  });
}

const createNewContact = async (req, res) => {
  //#swagger.tags=["contacts"]
  const user = {
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "email": req.body.email,
    "birthday": req.body.birthday,
    "favoriteColor": req.body.favoriteColor
  }
  const response = await getDatabase().db().collection("contacts").insertOne(user);
  if (response.acknowledged) {
    res.status(202).json(user)
  } else {
    res.status(500).json(response.error || "Some error ocurred while creating the user.");
  }
}

const updateUserbyId = async (req, res) => {
  //#swagger.tags=["contacts"]
  const userId = new ObjectId(req.params.id);
  const user = {
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "email": req.body.email,
    "birthday": req.body.birthday,
    "favoriteColor": req.body.favoriteColor
  }
  const response = await getDatabase().db().collection("contacts").replaceOne({ _id: userId }, user);
  if (response.modifiedCount > 0) {
    res.status(202).json(user)
  } else {
    res.status(500).json(response.error || "Some error ocurred while updating the user.");
  }
}

const deleteUserbyId = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await getDatabase().db().collection("contacts").deleteOne({ _id: userId });
  if (response.deletedCount > 0) {
    res.status(202).json(`User with id ${userId} succesfully deleted!`)
  } else {
    res.status(500).json(response.error || "Some error ocurred while deleting the user.");
  }
}

module.exports = {
  getAllContacts,
  getContactbyId,
  createNewContact,
  updateUserbyId,
  deleteUserbyId
}