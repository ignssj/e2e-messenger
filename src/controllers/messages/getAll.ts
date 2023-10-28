import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IMessage, Message } from '../../models/messages';
import { IGetAll } from '../../types';

export const getAll = async (req: Request<{}, {}, {}, IGetAll>, res: Response) => {
    const {limit=5, page=0, filter={}} = req.query;
    try{
        res.setHeader('access-control-expose-headers', 'x-total-count');
        res.setHeader('x-total-count', 1);
        const messages = await Message.find<IMessage[]>();
        if(!messages.length){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send({messages});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}