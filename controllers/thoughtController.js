const { Thought, User, Reaction } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .select("-__v")
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  postNewThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } }
        ).then((user) => res.json(user));
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteThoughtById(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : User.findOneAndUpdate(
              { username: thought.username },
              { $pull: { thoughts: req.params.id } },
              { runValidators: true, new: true }
            )
      )
      .then(() => res.json({ message: "Thought has been deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThoughtById(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { reactions: body } },
      { new: true, runValidators: true }
    )
 
      .then((thought) => {res.status(200).json(thought)})
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  deleteReactionById(req, res) {
    console.log(req.params)
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
     
      .then(() => res.json({ message: " Reaction deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
