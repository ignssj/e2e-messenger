import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../../models/users';
import { updateOneUser } from '../../repositories/users';
import { IPut } from '../../types';
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
    const {id} = req.params;
    const {username, password} = req.body;
    if(!id){
        return res.status(StatusCodes.BAD_REQUEST).send({error: 'userId is mandatory'});
    }
    try{
        const updatedUser = await updateOneUser(id, {username, password});
        if(!updatedUser){
            return res.status(StatusCodes.NOT_FOUND).send({error: "User not found"});
        }
        return res.status(StatusCodes.OK).send(updatedUser);
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: "Interal error"});
    }
};
