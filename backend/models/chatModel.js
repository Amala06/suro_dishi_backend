const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName:{
            type: String, 
            trim: true
        },
        isGrooupChat:{
            type: Boolean,
            default: false
        },
        users:[{
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        },],
        latestMessage:{
            type: moongooose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin:{
            type: moongooose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps: true,
    }
)

const Chat = moongooose.model("Chat", chatModel);
module.exports = Chat;