import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { IMessage, Message } from '../../models/messages';
import { Contact } from '../../models/contacts';
import { Chat } from '../../models/chats';
import { createOne, findAll, updateOne } from '../../repositories';
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
        const chat1 = await findAll(Chat, {userOne: sender, userTwo: receiver}, 0, 1);
        const chat2 = await findAll(Chat, {userOne: receiver, userTwo: sender}, 0, 1);
        if(!chat1.length && !chat2.length){
            const savedChat = await createOne(Chat, {userOne: sender, userTwo: receiver, lastMessage: savedMessage._id});
            if(!savedChat){
                throw new Error();
            }
        }else if(chat1.length){
            await updateOne(Chat, chat1[0]._id, {lastMessage: savedMessage._id}); 
        }else{
            await updateOne(Chat, chat2[0]._id, {lastMessage: savedMessage._id}); 
        }
        return res.status(StatusCodes.CREATED).send({message: savedMessage});
    }catch(err){
        console.log(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}


