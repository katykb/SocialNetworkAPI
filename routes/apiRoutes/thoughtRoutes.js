const router = require("express").Router();

const {
  getThoughts,
  getThoughtById,
  postNewThought,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  deleteReactionById,

  } = require("../../controllers/userController.js");

router.route("/getThoughts").get(getThoughts);

router.route("/:userId").post(postNewThought);

router
  .route("/:id")
  .get(getThoughtById)
  .delete(deleteThoughtById)
  .update(updateThoughtById);

router
  .route("/:id/reactions")
  .post(addReaction)
  .delete(deleteReactionById);

module.export = router;
