const { Schema, Models } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  toJSON: {
    getters: true,
  },
  id: false,
});

userSchema.virtuals("friendCount").get(function () {
  return this.friends.length;
});

//const User = Models("user", userSchema);

module.exports = userSchema;
