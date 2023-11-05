import {Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes';
import {key} from '../config';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if(!token){
           return res.status(StatusCodes.BAD_REQUEST).send({msg: 'Missing token'});        
        }
        const decoded = jwt.verify(token, key);
        (req as CustomRequest).token = decoded;
        next();
    }catch(err){
        return res.status(StatusCodes.UNAUTHORIZED).send({msg: 'Invalid token'});
    }
} 