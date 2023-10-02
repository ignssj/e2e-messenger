import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {Message} from '../../models/messages';
import {validation} from '../../middleware/requestValidation';
import yup from 'yup';

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object({
        page: yup.number().moreThan(0),
        limit: yup.number().moreThan(0),
        filter: yup.string()
    })),
}));

export const getAll = async (req: Request, res: Response) => {
    try{
        const messages = await Message.find();
        if(!messages.length){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send({messages});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}