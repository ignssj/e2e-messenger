import { Request, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';
import { User } from '../../models/users';

interface IParamProps {
    id: string;
}

interface IBodyParams {
    username?: string;
    password?: string;
}

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object({
        id: yup.string().required(),
    })),
    body: getSchema<IBodyParams>(yup.object({
        username: yup.string().required().min(5),
        password: yup.string().required().min(6),
    })),
}));

export const updateById = async (req: Request<IParamProps, IBodyParams>, res: Response) => {
    const {id} = req.params;
    const {username, password} = req.body;
    const updatedUser = await User.findOneAndUpdate({_id: id},{username, password},{new: true});
    if(!updatedUser){
        return res.status(StatusCodes.NO_CONTENT);
    }
    return res.status(StatusCodes.OK).send(updatedUser);
};
