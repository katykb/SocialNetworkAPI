const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
} = require('../controllers/usrController.js');

// /api/courses
router.route('/').get(getUsers).post(postNewUser);

module.export = router;