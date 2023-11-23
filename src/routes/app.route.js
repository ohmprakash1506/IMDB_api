import { Router } from "express";
import app from "../controllers/app.controller.js";

const route = Router()
const App = new app()  

route.get('/auto-generate', App.console)
route.get('/auto', App.all)

export default route ;