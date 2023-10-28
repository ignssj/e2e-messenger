import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Contact } from '../../models/contacts';
import { IGet } from '../../types';

export const getById = async (req: Request<IGet>, res: Response) => {
    try{
        const {id} = req.params;
        const contact = await Contact.findById(id);
        if(!contact){
            return res.status(StatusCodes.NOT_FOUND).send({error: 'User not found'});
        }
        return res.status(StatusCodes.OK).send(contact);
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Interal error'});
    }
};
