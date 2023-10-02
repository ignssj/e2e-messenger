import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {Message} from '../../models/messages';
import {validation} from '../../middleware/requestValidation';
import * as yup from 'yup';

interface IParamProps {
    id?: string;
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object({
        id: yup.string().required()
    })),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
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