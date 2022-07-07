const { Schema, Models } = require("mongoose");
const userSchema = require("./User");

const reactionSchema = new Schema ({

    reactionId: {
        type: Schema.type.ObjectId,
        default: new ObjectId,
    },

    reactionBody: {
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
        ref: userSchema,
      },

      toJSON: {
        getters: true,
      },
      id: false,

})

module.exports = reactionSchema;