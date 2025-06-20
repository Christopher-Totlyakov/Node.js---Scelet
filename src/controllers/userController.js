import { Router } from "express";
import userService from "../services/userService.js";

const userControler = Router();

userControler.get("/register", (req, res) => {
    res.render("user/register");
});

userControler.post("/register", async (req, res) => {
    const userData = req.body;
    
    await userService.register(userData);

    res.redirect('/')
});


export default userControler;