const router = require("express").Router();
const {
  getThoughts,
  getThoughtById,
  postNewThought,
  updateThoughtById,
  deleteThoughtById,

} = require("../controllers/usrController.js");

router.route("/getThoughts").get(getThoughts).post(postNewThought);

router.route("/:getSingleThought").get(getThoughtById).delete(deleteThoughtById).update(updateThoughtById);

module.export = router;