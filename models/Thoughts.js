const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reactions');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            type: [reactionSchema],
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
const Thoughts = model('Thoughs', thoughtSchema);
module.exports = Thoughts;