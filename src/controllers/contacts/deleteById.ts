
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IDelete } from '../../types';
import { Contact, IContact } from '../../models/contacts';

export const deleteById = async (req: Request<IDelete>, res: Response) => {
    const {id} = req.params;
    try{
        const deletedContact = await Contact.findOneAndDelete<IContact>({_id: id});
        if(!deletedContact){
            return res.status(StatusCodes.NOT_FOUND).send({msg: 'Contact not found'});
        }
        return res.status(StatusCodes.NO_CONTENT).send({});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Interal error'});
    }
};
    