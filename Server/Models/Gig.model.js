import mongoose, { Schema } from 'mongoose';

const {Schema} = mongoose;

const GigSchema = new Schema({
    userId : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    totalStars : {
        type : Number,
        default : 0
    },
    starNumber : {
        type : Number,
        default : 0
    },
    cover : {
        type : String,
        required : true,
    },
    cat : {
        type : String,
        required : true
    },
    shortDesc : {
        type : String,
        required : true
    },
    deliveryTime : {
        type : Number,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    revisionTime : {
        type : Number,
        required : true
    },
    images : {
        type : [String],
        required : false
    },
    sales : {
        type : Number,
        default : 0
    },
    features : {
        type : [String],
        required : false
    },
},{
    timestamps : true
})

export default mongoose.model("Gig",GigSchema);