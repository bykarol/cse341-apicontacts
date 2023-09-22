const router = require("express").Router();
const {
  getAllContacts,
  getContactbyId
} = require("../controllers");

router.get("/", getAllContacts);
router.get("/:id", getContactbyId);

module.exports = router;