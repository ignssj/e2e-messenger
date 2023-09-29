import { Request, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import { User } from '../../models/users';
import bcrypt from 'bcrypt';
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
    const {username, password} = req.body;
    try{
        bcrypt.hash(password, 15, async function(err, hash) {
            const user = User.build({username, password: hash});
            const response = await user.save();
            return res.status(StatusCodes.CREATED).send(response);
        });
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Interal error')
    }
};
