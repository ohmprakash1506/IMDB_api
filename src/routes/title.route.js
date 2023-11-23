import { Router } from "express";
import titleController from "../controllers/title.controller.js";

const route = Router()
const title = new titleController()

route.get('/find', title.findApi)
route.get('/rating', title.ratingApi)
route.get('/top-cast', title.topCastApi)

export default route;