import { Request, RequestHandler, Response } from 'express';
import { validation } from '../../middleware/validation';
import * as yup from 'yup';

interface IUser {
    username: string;
    password: string;
}

interface IFilter {
    filter: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IUser>(yup.object({
        username: yup.string().required().min(5),
        password: yup.string().required().min(6),
    })),
    query: getSchema<IFilter>(yup.object({
        filter: yup.string().required()
    })),
}));

export const createUser = async (req: Request<{},{},IUser>, res: Response) => {
    return res.status(200).send('Create user');
};
