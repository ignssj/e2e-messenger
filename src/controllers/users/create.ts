import { Request, RequestHandler, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';

interface IUser {
    username: string;
    password: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IUser>(yup.object({
        username: yup.string().required().min(5),
        password: yup.string().required().min(6),
    })),
}));

export const createUser = async (req: Request<{},{},IUser>, res: Response) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Create - Not implemented');
};
