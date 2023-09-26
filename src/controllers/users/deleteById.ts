import { Request, Response } from 'express';
import { validation } from '../../middleware/validation';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';

interface IParamProps {
    id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object({
        id: yup.number().integer().required().moreThan(0)
    })),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`DeleteById - ${req.params.id} - Not implemented`);
};
