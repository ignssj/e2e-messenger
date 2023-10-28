
import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import {StatusCodes} from 'http-status-codes';
import { IMessage, Message } from '../../models/messages';
import { IDelete } from '../../types';

export const deleteById = async (req: Request<IDelete>, res: Response) => {
    try{
        const {id} = req.params;
        const deletedMessage = await Message.findOneAndDelete<IMessage>({_id: id});
        if(!deletedMessage){
            return res.status(StatusCodes.NOT_FOUND).send({msg: 'Message not found'});
        }
        return res.status(StatusCodes.NO_CONTENT).send({});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Interal error'});
    }
};
    