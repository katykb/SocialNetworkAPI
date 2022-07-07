const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usrController.js");

router.route("/getUsers").get(getUsers).post(postNewUser);

router.route("/:getSingleUser").get(getSingleUser).delete(deleteUser);

module.export = router;
