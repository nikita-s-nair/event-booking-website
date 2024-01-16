import mongoose from "mongoose";
import user from "../models/user";
import Bookings from "../models/Bookings";
import bcrypt from "bcryptjs";


export const getAllUsers = async(req,res,next)=>{
    let users;
    try {
        users = await user.find();
    }
    catch(err){
        return console.log(err);
    }

    if(!users){
        return res.status(500).json({message: "Unexpected Error Occured"});
    }

    return res.status(200).json({users});
}


export const signup=async(req,res,next)=>{
    const {name,email,password}=req.body;
    if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()==="" ){
        return res.status(422).json({message:"Invalid Inputs"});
    }
    const hashedPassword=bcrypt.hashSync(password);
    let User;
    try{
        User = new user({name, email, password: hashedPassword})
        User = await User.save();
    }
    catch(err){
        return console.log(err);
    }
    if (!User){
        return res.status(500).json({message: "Unexpected Errors Occured"});
    }
    return res.status(201).json({id: user._id});

}

export const updateUser = async (req, res, next)=>{
    const id = req.params.id;
    const {name,email,password}=req.body;
    if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()==="" ){
        return res.status(422).json({message:"Invalid Inputs"});
    }

    const hashedPassword=bcrypt.hashSync(password);
    let User;
    try{
        User = await user.findByIdAndUpdate(id,{ name,email,password: hashedPassword })
    }
    catch(err){
        return console.log(err);
    }
    if(!User){
        return res.status(500).json({message: "Unexpected Errors Occured"});
    }
    return res.status(201).json({message: "Updated Successfully"});
}

export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let delUser;
    try {
      delUser = await user.findByIdAndDelete(id);
    } catch (err) {
      return console.log(err);
    }
    if (!delUser) {
      return res.status(500).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ message: "Deleted Successfully" });
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email && email.trim() === "" && !password && password.trim() === "") {
      return res.status(422).json({ message: "Invalid Inputs" });
    }
    let existingUser;
    try {
      existingUser = await user.findOne({ email });
    } catch (err) {
      return console.log(err);
    }
  
    if (!existingUser) {
      return res.status(404).json({ message: "Unable to find user from this ID" });
    }
  
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
  
    return res
      .status(200)
      .json({ message: "Login Successfull", id: existingUser._id });
  };
  export const getBookingsOfUser = async (req, res, next) => {
    const id = req.params.id;
    let bookings;
    try {
      bookings = await Bookings.find({ user: id })
        .populate("eventTitle")
        .populate("user");
    } catch (err) {
      return console.log(err);
    }
    if (!bookings) {
      return res.status(500).json({ message: "Unable to get Bookings" });
    }
    return res.status(200).json({ bookings });
  };
 

  