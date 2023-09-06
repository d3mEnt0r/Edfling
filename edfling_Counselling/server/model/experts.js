import mongoose from "mongoose";


const expertSchema = mongoose.Schema({
    expert_id:{
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    chat_schedule:{
        type: String,
        required: true
        // format => "Sat, 01:00 pm - 05:30 pm"
    },
    next_available: {
        type: String,
        required: true
        // format => "Tue, 28th Mar"
    },
    online: {
        type: Boolean,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    skills: [{
        type: String,
        required: true
    }],
    summary: {
        type: String,
        required: true
    },
    education: [{
        type: String,
        required: true
    }],
    experience: [{
        type: String,
        required: true
    }],
    email: [{
        type: String,
        required: true
    }],
});

const expert = mongoose.model('expert', expertSchema);

export default expert;