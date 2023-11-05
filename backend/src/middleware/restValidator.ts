import * as yup from 'yup';
import { validation } from './requestValidation';
import { IDelete, IGet, IGetAll } from '../types';

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IGetAll>(yup.object({
        page: yup.number().moreThan(0),
        limit: yup.number().moreThan(0),
        filter: yup.string()
    })),
}));

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IGet>(yup.object({
        id: yup.string().required()
    })),
}));

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IDelete>(yup.object({
        id: yup.string().required().nonNullable()
    })),
}));