import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { Message, IMessage } from '../../models/messages';
import * as yup from 'yup';

interface IBody{
    sender: string;
    receiver: string;
    payload: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IMessage>(yup.object({
        sender: yup.string().required().min(24),
        receiver: yup.string().required().min(24),
        payload: yup.string().required().min(1)
    })),
}));

export const createMessage = async(req: Request<{},{},IBody>, res: Response) => {
    try{
        const {sender, receiver ,payload} = req.body;
        const message = Message.build({sender, receiver, payload});
        const savedMessage = await message.save();
        if(!savedMessage){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.CREATED).send({message: savedMessage});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}


