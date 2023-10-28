import { Request, Response } from 'express';
import { validation } from '../../middleware/requestValidation';
import { StatusCodes } from 'http-status-codes';
import { IContact, Contact } from '../../models/contacts';
import { User } from '../../models/users';
import * as yup from 'yup';

export const addValidation = validation((getSchema) => ({
    body: getSchema<Partial<IContact>>(yup.object({
        userid: yup.string().required().min(15),
        contact_userid: yup.string().required().min(15),
        name: yup.string().required().min(5),
    })),
}));

export const addContact = async (req: Request<{},{},IContact>, res: Response) => {
    const {contact_userid, name, userid} = req.body;
    try{
        const user = await User.findById(contact_userid);
        if(!user){
            return res.status(StatusCodes.NOT_FOUND).send({"error": "Contact doesnt exist"});
        }
        const contact = Contact.build({contact_userid, userid, name, publicKey: user.publicKey});
        const response = await contact.save();
        if(!response){
            throw new Error ();
        }
        return res.status(StatusCodes.CREATED).send(response);
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Internal error"});
    }
}