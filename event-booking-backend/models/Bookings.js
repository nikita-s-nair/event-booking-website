import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    eventType: {
        type: String,
        required: true,
    },
    eventTitle: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,

    },
    tickets: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

export default mongoose.model("Booking",bookingSchema);