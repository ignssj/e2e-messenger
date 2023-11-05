import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findAll } from '../../repositories';
import { User } from '../../models/users';
import { IGetAll } from '../../types';

export const getAll = async (req: Request<{},{},{},IGetAll>, res: Response) => {
    const {limit=5, page=1, filter={}} = req.query;
    const offset = (page-1) * limit;
    try{
        const users = await findAll(User, filter, offset, Number(limit));
        if(!users.length){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send(users);
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Interal error"});
    }
};
