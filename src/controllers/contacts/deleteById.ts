
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IDelete } from '../../types';
import { deleteOneContact } from '../../repositories/contacts';

export const deleteById = async (req: Request<IDelete>, res: Response) => {
    const {id} = req.params;
    if(!id){
        return res.status(StatusCodes.BAD_REQUEST).send({error: 'userId is mandatory'});
    }
    try{
        const deletedContact = await deleteOneContact(id);
        if(!deletedContact){
            return res.status(StatusCodes.NOT_FOUND).send({msg: 'Contact not found'});
        }
        return res.status(StatusCodes.NO_CONTENT).send({});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Interal error'});
    }
};
    