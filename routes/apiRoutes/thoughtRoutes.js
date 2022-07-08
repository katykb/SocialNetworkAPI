const router = require("express").Router();

const {
  getThoughts,
  getThoughtById,
  postNewThought,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  deleteReactionById,

  } = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(postNewThought);

router.route("/:userId").post(postNewThought);

router
  .route("/:id")
  .get(getThoughtById)
  .delete(deleteThoughtById)
  .put(updateThoughtById);

router
  .route("/:id/reactions")
  .post(addReaction)

  router
  .route("/:id/reactions/reactionId")
  .delete(deleteReactionById);

module.exports = router;
