import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findOne } from '../../repositories';
import { User } from '../../models/users';
import { IGet } from '../../types';

export const getById = async (req: Request<IGet>, res: Response) => {
    const {id} = req.params;
    if(!id){
        return res.status(StatusCodes.BAD_REQUEST).send({error: 'userId is mandatory'});
    }
    try{
        const user = await findOne(User, id);
        if(!user){
            return res.status(StatusCodes.NOT_FOUND).send({error: 'User not found'});
        }
        return res.status(StatusCodes.OK).send(user);
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Interal error'});
    }
};
