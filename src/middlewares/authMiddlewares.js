import jsonwebtoken from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

export function auth(req, res, next){
    const token = req.cookies['auth'];

    if (!token) {
        return next();   
    }

    try {
        const user = jsonwebtoken.verify(token, JWT_SECRET);

        req.user = user;
        res.locals.user = user;
        res.locals.isAuthenticated = true;
        next()
    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/users/login');
    }
}