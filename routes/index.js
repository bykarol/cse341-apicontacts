const router = require("express").Router();

const {
  getAllContacts,
  getContactbyId,
  createNewContact,
  updateUserbyId,
  deleteUserbyId
} = require("../controllers");

router.use("/", require("./swagger"));

router.get("/", getAllContacts);
router.get("/:id", getContactbyId);
router.post("/newcontact", createNewContact);
router.put("/updatecontact/:id", updateUserbyId);
router.delete("/deletecontact/:id", deleteUserbyId);

module.exports = router;