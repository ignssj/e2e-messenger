import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { IMessage, Message } from '../../models/messages';
import { createOne } from '../../repositories';
import * as yup from 'yup';

export const createValidation = validation((getSchema) => ({
    body: getSchema<IMessage>(yup.object({
        sender: yup.string().required().min(24),
        receiver: yup.string().required().min(24),
        payload: yup.string().required().min(1)
    })),
}));

export const createMessage = async(req: Request<{},{},IMessage>, res: Response) => {
    const {sender, receiver, payload} = req.body;
    try{
        const savedMessage = await createOne(Message, {sender, receiver, payload});
        if(!savedMessage){
            throw new Error();
        }
        return res.status(StatusCodes.CREATED).send({message: savedMessage});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}


