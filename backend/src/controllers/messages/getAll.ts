import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findAll } from '../../repositories';
import { Message } from '../../models/messages'
import { IGetAll } from '../../types';

export const getAll = async (req: Request<{}, {}, {}, IGetAll>, res: Response) => {
    const {limit=5, page=1, ...filter} = req.query;
    const offset = (page-1) * limit;
    try{
        const messages = await findAll(Message, filter, offset, Number(limit));
        if(!messages.length){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send({messages});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}