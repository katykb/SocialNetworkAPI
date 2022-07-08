const router = require("express").Router();
const {
  getUsers,
  getUserById,
  postNewUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriendFromUser

} = require("../../controllers/userController");

router.route("/getUsers").get(getUsers).post(postNewUser);

router.route("/:id")
.get(getUserById).delete(deleteUser).put(updateUser);

router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriendFromUser);

module.exports = router;
