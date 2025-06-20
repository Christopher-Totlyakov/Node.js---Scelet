import { Router } from "express";
import userService from "../services/userService.js";
import { isAuth, isGuest } from "../middlewares/authMiddlewares.js";

const userControler = Router();

userControler.get("/register", isGuest, (req, res) => {
    res.render("user/register");
});

userControler.post("/register", isGuest, async (req, res) => {
    const userData = req.body;
    
    const token = await userService.register(userData);
    res.cookie('auth', token)

    res.redirect('/')
});

userControler.get("/login", isGuest, (req, res) =>{
    res.render("user/login")
})

userControler.post("/login", isGuest, async (req, res) => {
    const {username, password} = req.body;

    const token = await userService.login(username, password);

    res.cookie('auth', token);

    res.redirect('/');
});

userControler.get('/logout', isAuth, (req,res) =>{
    res.clearCookie('auth');
    res.redirect('/');
})


export default userControler;