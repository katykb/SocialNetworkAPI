const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriendFromUser

} = require("../controllers/usrController.js");

router.route("/getUsers").get(getUsers).post(postNewUser);

router.route("/:getSingleUser").get(getSingleUser).delete(deleteUser).update(updateUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriendFromUser);

module.export = router;
