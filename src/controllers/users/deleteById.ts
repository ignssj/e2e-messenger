import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
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
    try{
        const {id} = req.params;
        const deletedUser = await User.findOneAndDelete({_id: id});
        if(!deletedUser){
            return res.status(StatusCodes.NOT_FOUND).send({msg: 'User not found'});
        }
        return res.status(StatusCodes.NO_CONTENT).send({});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Interal error"});
    }
};
    