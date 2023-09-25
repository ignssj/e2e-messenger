import { RequestHandler } from "express";
import { Schema, ValidationError } from "yup";

type TProperty = 'header' | 'body' | 'params' | 'query';
type TGetSchema = <T>(schema: Schema<T>) => Schema<T> 
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>
type TAllSchemas = Record<TProperty, Schema<any>>
type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema);
    const errorsResult : Record<string, Record<string, string>> = {};
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], { abortEarly: false });
        } catch (err) {
            const yupErr = err as ValidationError;
            const errors: Record<string, string> = {};
            yupErr.inner.forEach((error) => {
                if (!error.path) return;
                errors[error.path] = error.message;
            });
            errorsResult[key]=errors;
        }
    });
    if(Object.entries(errorsResult).length){
        return res.status(400).send({errors: errorsResult});
    }
    return next();
};
