import Bookings from "../models/Bookings";
import User from "../models/user";
import Event from "../models/Event";
import mongoose from "mongoose";

export const newBooking = async (req, res, next)=>
{
    const {eventType, eventTitle, eventDate, tickets, user}=req.body;

    let booking;
    try{
         booking= new Bookings({
          eventType,
          eventTitle,
          eventDate,
          tickets,
          user

         });

         booking = await booking.save();
    }
    catch(err){
        return console.log(err);    
    }
    if (!booking) {
        return res.status(500).json({ message: "Unable to create booking" });
    }
      
    return res.status(201).json({booking});
    

    
}

export const getBookingById = async (req, res, next) => {
    const id = req.params.id;
    let booking;
    try {
      booking = await Bookings.findById(id);
    } catch (err) {
      return console.log(err);
    }
    if (!booking) {
      return res.status(500).json({ message: "Unexpected Error" });
    }
    return res.status(200).json({ booking });
  };

  export const deleteBooking = async (req, res, next) => {
    const id = req.params.id;
    let booking;
    try {
      booking = await Bookings.findByIdAndDelete(id).populate("user eventTitle");
      console.log(booking);
      const session = await mongoose.startSession();
      session.startTransaction();
      await booking.user.bookings.pull(booking);
      await booking.eventTitle.bookings.pull(booking);
      await booking.eventTitle.save({ session });
      await booking.user.save({ session });
      session.commitTransaction();
    } catch (err) {
      return console.log(err);
    }
    if (!booking) {
      return res.status(500).json({ message: "Unable to Delete" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
  };