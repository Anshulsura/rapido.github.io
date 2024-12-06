import mongoose from "mongoose";

const blackListToken = new mongoose.Schema({
    token : {
        type : String,
        required : true,
        unique : true,
    },
    createAt: {
        type: Date,
        default: Date.now, // Sets default value to current date and time
        required: true, // Ensures this field is always present
    },
})
;
const blackListTokenModel = mongoose.model('blacklistUser', blackListToken)

export default blackListTokenModel;