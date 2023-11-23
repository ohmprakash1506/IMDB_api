import { Router } from "express";
import actorControllers from "../controllers/actors.controller.js";

const route = Router()
const actors = new actorControllers()

route.get('/list-of-born',actors.bornApi)
route.get('/get-boi',actors.boiApi)
route.get('/get-all-images',actors.imageApi)

export default route;