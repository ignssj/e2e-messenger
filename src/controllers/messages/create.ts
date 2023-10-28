import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { IMessage, Message } from '../../models/messages';
import { Contact } from '../../models/contacts';
import { createOne, findAll } from '../../repositories';
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
        const contact = await findAll(Contact, {contact_userid: receiver}, 0, 1);
        if(!contact.length){
            return res.status(StatusCodes.NOT_FOUND).send({error: 'Contact doesnt exist'});
        }
        const savedMessage = await createOne(Message, {sender, receiver, payload});
        if(!savedMessage){
            throw new Error();
        }
        return res.status(StatusCodes.CREATED).send({message: savedMessage});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}


