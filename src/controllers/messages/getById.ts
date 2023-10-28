import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findOneMessage } from '../../repositories/messages';
import { IGet } from '../../types';

export const getById = async (req: Request<IGet>, res: Response) => {
    const {id} = req.params;
    if(!id){
        return res.status(StatusCodes.BAD_REQUEST).send({error: 'userId is mandatory'});
    }
    try{
        const message = await findOneMessage(id);
        if(!message){
            return res.status(StatusCodes.NOT_FOUND).send({error: 'Message not found'});
        }
        return res.status(StatusCodes.OK).send({message});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}