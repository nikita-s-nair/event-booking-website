import Event from "../models/Event";

export const getAllEvents = async (req, res, next) => {
    let events;
  
    try {
      events = await Event.find();
    } catch (err) {
      return console.log(err);
    }
  
    if (!events) {
      return res.status(500).json({ message: "Request Failed" });
    }
    return res.status(200).json({ events });
  };

  export const addEvents=async(req,res,next)=>{
    const {eventType,title,eventDate,posterURL,bookings}=req.body;
    if(!eventType && eventType.trim()==="" && !title && title.trim()==="" && !eventDate && eventDate.trim()==="" && !posterURL && posterURL.trim()==="" ){
        return res.status(422).json({message:"Invalid Inputs"});
    }
    
    let event;
    try{
        event = new Event({eventType,title,eventDate,posterURL,bookings})
        event = await event.save();
    }
    catch(err){
        return console.log(err);
    }
    if (!event){
        return res.status(500).json({message: "Unexpected Errors Occured"});
    }
    return res.status(201).json({event});

}

export const deleteEvent = async (req, res, next) => {
    const id = req.params.id;
    let delEvent;
    try {
      delEvent = await Event.findByIdAndDelete(id);
    } catch (err) {
      return console.log(err);
    }
    if (!delEvent) {
      return res.status(500).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ message: "Deleted Successfully" });
};

export const getEventById = async (req, res, next) => {
    const id = req.params.id;
    let event;
    try {
      event = await Event.findById(id);
    } catch (err) {
      return console.log(err);
    }
  
    if (!event) {
      return res.status(404).json({ message: "Invalid Movie ID" });
    }
  
    return res.status(200).json({ event });
  };