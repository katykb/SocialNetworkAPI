const { Schema, Types } = require("mongoose");
const userSchema = require("./User");

const reactionSchema = new Schema ({

    reactionId: {
        type: Schema.Types.ObjectId,
        default:() => new Types.ObjectId(),
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
        type: Schema.Types.ObjectId,
        ref: userSchema,
      },
    }, {    toJSON: {
        getters: true,
      },
      id: false,
    }

)



module.exports = reactionSchema;