import { Request, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';

interface IParamProps {
    id?: number;
}

interface IBodyParams {
    username?: string;
    password?: string;
}

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getSchema<IBodyParams>(yup.object({
        username: yup.string().required().min(5),
        password: yup.string().required().min(6),
    })),
}));

export const updateById = async (req: Request<IParamProps, IBodyParams>, res: Response) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`UpdateById - ${req.params.id} - Not implemented`);
};
