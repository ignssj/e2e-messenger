import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';
import { Message } from '../../models/messages';

interface IParam {
    id?: string;
}

interface IBody {
    sender?: string;
    receiver?: string;
    payload?: string;
}

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IParam>(yup.object({
        id: yup.string().required(),
    })),
    body: getSchema<IBody>(yup.object({
        sender: yup.string().required().min(24),
        receiver: yup.string().required().min(24),
        payload: yup.string().required().min(1)
    })),
}));

export const updateById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {sender, receiver, payload} = req.body;
    try{
        const updated = await Message.findOneAndUpdate({_id: id},{sender, receiver, payload},{new: true});
        if(!updated){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send({message: updated});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}