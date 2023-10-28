import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Message } from '../../models/messages';
import { IGet } from '../../types';

export const getById = async (req: Request<IGet>, res: Response) => {
    try{
        const {id} = req.params;
        const message = await Message.findById(id);
        if(!message){
            return res.status(StatusCodes.NOT_FOUND).send({error: 'Message not found'});
        }
        return res.status(StatusCodes.OK).send({message});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}