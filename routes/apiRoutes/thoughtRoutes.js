const router = require("express").Router();
const {
  getThoughts,
  getThoughtById,
  postNewThought,
  updateThoughtById,
  deleteThoughtById,
  getReaction,
  deleteReactionById,
} = require("../../controllers/userController.js");

router.route("/getThoughts").get(getThoughts).post(postNewThought);

router
  .route("/:getSingleThought")
  .get(getThoughtById)
  .delete(deleteThoughtById)
  .update(updateThoughtById);

router
  .route("/getSingleThought/reactions")
  .post(getReaction)
  .delete(deleteReactionById);

module.export = router;
