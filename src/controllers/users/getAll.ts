import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser, User } from '../../models/users';
import { IGetAll } from '../../types';

export const getAll = async (req: Request<{},{},{},IGetAll>, res: Response) => {
    const {limit=5, page=0, filter={}} = req.query;
    try{
        res.setHeader('access-control-expose-headers', 'x-total-count');
        res.setHeader('x-total-count', 1);
        const users = await User.find<IUser[]>();
        if(!users.length){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send(users);
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Interal error"});
    }
};
