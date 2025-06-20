import { Router } from "express";

const userControler = Router();

userControler.get("/register", (req, res) => {
    res.render("user/register");
});

export default userControler;