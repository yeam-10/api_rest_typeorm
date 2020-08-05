
//Modulo routers
import {Router} from 'express'
import {getusers, createusers, getusersi, updateusers, deleteuser} from '../controllers/user.controllers'
const router = Router()

router.get("/users",getusers);
router.post("/users", createusers);
router.get("/users/:id", getusersi);
router.put("/users/:id", updateusers);
router.delete("/users/:id", deleteuser);


export default router //para usar en otros archivos