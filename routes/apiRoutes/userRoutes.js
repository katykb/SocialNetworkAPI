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

router.route("/").get(getUsers).post(postNewUser);

router.route("/:id")
.get(getUserById).delete(deleteUser).put(updateUser);

router.route("/:id/friends/:friendId").put(addFriend).delete(removeFriendFromUser);

module.exports = router;
