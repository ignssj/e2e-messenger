import {Request, Response} from 'express';
import {validation} from '../../middleware/requestValidation';
import {StatusCodes} from 'http-status-codes';
import {User, IUser} from '../../models/users';
import {key} from '../../config';
import bcrypt from 'bcrypt';
import jwt, {Secret, JwtPayload} from 'jsonwebtoken';
import * as yup from 'yup';

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IUser>(yup.object({
        username: yup.string().required().min(6),
        password: yup.string().required().min(6),
    })),
}));

export const authenticate = async(req: Request<{},{},IUser>, res: Response) => {
    const {username, password} = req.body;
    try{
        const userExist = await User.findOne({username: username});
        if(!userExist){
            return res.status(StatusCodes.BAD_REQUEST).send({'msg': 'User does not exist in our database'})
        }
        const authenticated = bcrypt.compareSync(password, userExist.password);
        if(!authenticated){
            return res.status(StatusCodes.BAD_REQUEST).send({'msg': 'Wrong credentials'})
        }
        const token = jwt.sign({_id: userExist._id?.toString, name: userExist.username}, key, {expiresIn: '1d'} )
        return res.status(StatusCodes.OK).send({token});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({'error': 'Interal error'});
    }
}