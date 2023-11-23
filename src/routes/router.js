import { Router } from "express";
import app from "./app.route.js";
import actors from './actors.route.js';
import title from './title.route.js'

const router = Router();

const defaultRoute = [
  {
    path: "/app",
    route: app,
  },
  {
    path: "/actors",
    route: actors
  },
  {
    path: "/title",
    route:title
  }
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
