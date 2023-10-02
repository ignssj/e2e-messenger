
import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import {StatusCodes} from 'http-status-codes';
import { Message } from '../../models/messages';
import * as yup from 'yup';

interface IParam {
    id?: string;
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParam>(yup.object({
        id: yup.string().required().nonNullable()
    })),
}));

export const deleteById = async (req: Request<IParam>, res: Response) => {
    try{
        const {id} = req.params;
        const deletedMessage = await Message.findOneAndDelete({_id: id});
        if(!deletedMessage){
            return res.status(StatusCodes.NOT_FOUND).send({msg: 'Message not found'});
        }
        return res.status(StatusCodes.NO_CONTENT).send({});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Interal error'});
    }
};
    