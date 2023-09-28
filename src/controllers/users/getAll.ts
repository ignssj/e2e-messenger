import { Request, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import { User } from '../../models/users';
import * as yup from 'yup';

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

export const getAll = async (req: Request<{},{},{},IQueryProps>, res: Response) => {
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);
    const users = await User.find();
    if(!users.length){
        return res.status(StatusCodes.NO_CONTENT).send({});
    }
    return res.status(StatusCodes.OK).send(users);
};
