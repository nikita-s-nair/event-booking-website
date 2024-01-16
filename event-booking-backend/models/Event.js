import mongoose from "mongoose";

const eventSchema=new mongoose.Schema({
    eventType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,

    },
    eventDate: {
        type: Date,
        required: true,
    },
    posterURL: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean
    },
    bookings: [{type: mongoose.Types.ObjectId, ref: "Booking" }]
});

export default mongoose.model("Event",eventSchema);