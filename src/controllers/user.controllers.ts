import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import {user} from '../entity/user'

//Get users

export const getusers = async(req: Request, res: Response): Promise<Response> =>{
const Users = await getRepository(user).find();
return res.json(Users);
}

//Consult users

export const getusersi = async(req: Request, res: Response): Promise<Response> =>{
   const resultUsers = await getRepository(user).findOne(req.params.id);
   return res.json( resultUsers);
   }
   
//Put users
export const updateusers = async(req: Request, res: Response): Promise<Response> =>{
 const upuser  = await getRepository(user).findOne(req.params.id);

 if (upuser) {
   getRepository(user).merge(upuser, req.body);
    const resultup = await getRepository(user).save(upuser);

   return res.json(resultup);
 }

   return res.status(404).json({msg: "User not found"});
 

}
//Create users 

export const createusers = async(req: Request, res: Response): Promise<Response> =>{
   const newUser =  getRepository(user).create(req.body);
   const result  = await getRepository(user).save(newUser);

   return res.json(result);
}

//Delete users

export const deleteuser = async(req: Request, res: Response): Promise<Response> =>{
   const resultUsers = await getRepository(user).delete(req.params.id);
   return res.json( resultUsers);
   }