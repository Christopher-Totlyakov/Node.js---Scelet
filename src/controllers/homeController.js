import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.send('home controler');
})

export default homeController;