import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { IContact, Contact } from '../../models/contacts';
import { IPut } from '../../types';
import * as yup from 'yup';

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IPut>(yup.object({
        id: yup.string().required(),
    })),
    body: getSchema<Partial<IContact>>(yup.object({
        userid: yup.string().required().min(15),
        contact_userid: yup.string().required().min(15),
        name: yup.string().required().min(5),
    })),
}));

export const updateById = async (req: Request<IPut, {}, IContact>, res: Response) => {
    const {id} = req.params;
    const {userid, contact_userid, name} = req.body;
    try{
        const updated = await Contact.findOneAndUpdate<IContact>({_id: id},{userid, contact_userid, name},{new: true});
        if(!updated){
            return res.status(StatusCodes.NO_CONTENT).send({});
        }
        return res.status(StatusCodes.OK).send({message: updated});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'Internal error'});
    }
}