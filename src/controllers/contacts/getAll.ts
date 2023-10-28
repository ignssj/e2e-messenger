import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IContact, Contact } from '../../models/contacts';
import { IGetAll } from '../../types';

export const getAll = async (req: Request<{}, {}, {}, IGetAll>, res: Response) => {
    const {limit=1, page=1, filter={}} = req.query;
    const offset = (page-1) * limit;
    try{
        res.setHeader('access-control-expose-headers', 'x-total-count');
        res.setHeader('x-total-count', 1);
        const contacts = await Contact.find<IContact[]>(filter).skip(offset).limit(Number(limit)).exec();
        return contacts.length ? res.status(StatusCodes.OK).send({contacts}) : res.status(StatusCodes.NO_CONTENT).send({});
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({"error": "Internal error"});
    }
}