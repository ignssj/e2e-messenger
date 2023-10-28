import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { IMessage, Message } from '../../models/messages';
import { updateOne } from '../../repositories';
import { IPut } from '../../types';
import * as yup from 'yup';

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IPut>(yup.object({
        id: yup.string().required(),
    })),
    body: getSchema<IMessage>(yup.object({
        sender: yup.string().required().min(24),
        receiver: yup.string().required().min(24),
        payload: yup.string().required().min(1)
    })),
}));

export const updateById = async (req: Request<IPut, {}, IMessage>, res: Response) => {
    const {sender, receiver, payload} = req.body;
    const {id} = req.params;
    if(!id){
        return res.status(StatusCodes.BAD_REQUEST).send({error: 'userId is mandatory'});
    }
    try{
        const updated = await updateOne(Message, id,{sender, receiver, payload});
        if(!updated){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send({message: updated});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}