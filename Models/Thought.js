const { Schema, Models } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    date: { type: Date, default: Date.now },
  },

  username: {
    type: Schema.type.ObjectId,
    ref: "User",
    required: true,
  },

  reactions: [reactionSchema],

  toJSON: {
    getters: true,
  },
  id: false,
});

const Thoughts = Models(Thoughts, thoughtSchema);

module.exports = thoughtSchema;
