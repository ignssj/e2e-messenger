import { Request, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import { User } from '../../models/users';
import * as yup from 'yup';

interface IParamProps {
    id?: string;
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object({
        id: yup.string().required().nonNullable()
    })),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    const {id} = req.params;
    const deletedUser = await User.findOneAndDelete({_id: id});
    if(!deletedUser){
        return res.status(StatusCodes.NOT_FOUND).send({});
    }
    return res.status(StatusCodes.OK).send({});
};
