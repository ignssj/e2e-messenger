import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { User, IUser } from '../../models/users';
import bcrypt from 'bcrypt';
import * as yup from 'yup';

export const createValidation = validation((getSchema) => ({
    body: getSchema<IUser>(yup.object({
        username: yup.string().required().min(6),
        password: yup.string().required().min(6),
        publicKey: yup.string().required().min(6),
    })),
}));

export const createUser = async (req: Request<{},{},IUser>, res: Response) => {
    const {username, password, publicKey} = req.body;
    try{
        bcrypt.hash(password, 15, async function(err, hash) {
            const user = User.build({username, publicKey, password: hash});
            const response = await user.save();
            return res.status(StatusCodes.CREATED).send(response);
        });
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Interal error"})
    }
};
