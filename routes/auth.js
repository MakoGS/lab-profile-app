"use strict";

const { Router } = require("express");
const router = Router();

const authenticationControllers = require("./../controllers/authentication");
const routeGuardMiddleware = require("./../middleware/route-guard");

router.get("/loggedin");
router.get(
  "/logout",
  routeGuardMiddleware(true),
  authenticationControllers.signOut
);
router.post("/edit");
router.post("/upload");
router.post(
  "/signup",
  routeGuardMiddleware(false),
  authenticationControllers.signUp
);
router.post(
  "/login",
  routeGuardMiddleware(false),
  authenticationControllers.signIn
);

module.exports = router;
