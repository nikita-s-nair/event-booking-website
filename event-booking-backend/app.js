import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-routes';
import eventRouter from './routes/event-routes';
import bookingsRouter from './routes/booking-routes';
import cors from 'cors';
dotenv.config();

const app=express();
app.use(express.json());
//middlewares
app.use(cors());
app.use("/user",userRouter);
app.use("/events",eventRouter);
app.use("/booking",bookingsRouter);


mongoose.connect(
    `mongodb+srv://nikitabsnair:${process.env.MONGODB_PASSWORD}@cluster0.rvehxwv.mongodb.net/?retryWrites=true&w=majority`
    
)
.then(()=>
    app.listen(5000,()=>
        {console.log(`Connected to database and server is running`)
        }
    )
) 
.catch((e)=>console.log(e));



