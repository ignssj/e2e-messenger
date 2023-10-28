import { Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes';
import { IUser, User } from '../../models/users';
import { IDelete } from '../../types';

export const deleteById = async (req: Request<IDelete>, res: Response) => {
    try{
        const {id} = req.params;
        const deletedUser = await User.findOneAndDelete<IUser>({_id: id});
        if(!deletedUser){
            return res.status(StatusCodes.NOT_FOUND).send({msg: 'User not found'});
        }
        return res.status(StatusCodes.NO_CONTENT).send({});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Interal error"});
    }
};
    