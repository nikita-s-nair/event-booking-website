import express from "express";
import { getAllEvents, addEvents, deleteEvent, getEventById } from "../controllers/event-controller";
const eventRouter = express.Router();

eventRouter.get("/",getAllEvents);
eventRouter.post("/",addEvents);
eventRouter.delete("/:id",deleteEvent);
eventRouter.get("/:id",getEventById);

export default eventRouter;

