"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Modulo routers
var express_1 = require("express");
var user_controllers_1 = require("../controllers/user.controllers");
var router = express_1.Router();
router.get("/users", user_controllers_1.getusers);
router.post("/users", user_controllers_1.createusers);
router.get("/users/:id", user_controllers_1.getusersi);
router.put("/users/:id", user_controllers_1.updateusers);
router.delete("/users/:id", user_controllers_1.deleteuser);
exports.default = router; //para usar en otros archivos
