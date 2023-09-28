import { Request, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import { User } from '../../models/users';
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
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
        return res.status(404).send('User not found');
    }
    return res.status(StatusCodes.OK).send(user);
};
