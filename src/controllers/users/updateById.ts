import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { IUser, User } from '../../models/users';
import { IPut } from '../../types';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IPut>(yup.object({
        id: yup.string().required(),
    })),
    body: getSchema<Partial<IUser>>(yup.object({
        username: yup.string().required().min(6),
        password: yup.string().required().min(6),
    })),
}));

export const updateById = async (req: Request<IPut, {}, IUser>, res: Response) => {
    try{
        const {id} = req.params;
        const {username, password} = req.body;
        const updatedUser = await User.findOneAndUpdate({_id: id},{username, password},{new: true});
        if(!updatedUser){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send(updatedUser);
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Interal error"});
    }
};
