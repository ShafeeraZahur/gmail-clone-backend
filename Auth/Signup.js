import express from "express";
import bcrypt from "bcrypt";
import {Auth} from "../Database/models.js";

const signupRouter = express.Router();


//api for registering/creating a user


signupRouter.post("/signup",async(req,res)=>{
    const {body}=req;
    const {email} =body;
    try{
        const existingUser= await Auth.findOne({email:email});
        if (existingUser) {
            res.status(409).send({ msg: "User already exists" });
            return;
        }

        //body before encryption
        const objectBody={
            ...body,
            userId:Date.now().toString(),
            isAccountVerified: false,
        }
        const user = new Auth(objectBody);
        await user.validate();

        //encrypting the password
        const hashedPassword = bcrypt.hashSync(body.password,10);
        await Auth.create({...objectBody,password:hashedPassword});


        res.send({ msg: "User Created Successfully for registration",hashedPassword});

    }
    catch (err) {
        res.status(500).send({ msg: "Error Occured while registering a user" });
    }
});




export default signupRouter;