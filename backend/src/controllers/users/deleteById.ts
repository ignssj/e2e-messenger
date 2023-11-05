import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { deleteOne } from '../../repositories';
import { User } from '../../models/users';
import { IDelete } from '../../types';

export const deleteById = async (req: Request<IDelete>, res: Response) => {
    const {id} = req.params;
    if(!id){
        return res.status(StatusCodes.BAD_REQUEST).send({error: 'userId is mandatory'});
    }
    try{
        const deletedUser = await deleteOne(User, id);
        if(!deletedUser){
            return res.status(StatusCodes.NOT_FOUND).send({msg: 'User not found'});
        }
        return res.status(StatusCodes.NO_CONTENT).send({});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Interal error"});
    }
};
    