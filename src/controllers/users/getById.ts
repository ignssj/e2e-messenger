import { Request, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';

interface IParamProps {
    id: number;
}

export const getByIdValidation = validation((getSchema) => ({
    query: getSchema<IParamProps>(yup.object({
        id: yup.number().required().moreThan(0)
    })),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.params.id);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('GetById - Not implemented');
};
