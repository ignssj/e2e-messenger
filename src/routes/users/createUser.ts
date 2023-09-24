import { insertNewDocument } from '../../helpers';
import { Request, Response } from 'express';
import Joi from 'joi';

const schema = Joi.object({
	username: Joi.string().alphanum().min(3).max(30).required(),
	password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

const createUser = async (req: Request, res: Response) => {
	try {
		await schema.validateAsync(req.body);
		const user_type = await insertNewDocument('user', req.body);
		return res.status(200).send({ user_type });
	} catch (e: unknown) {
		res.status(400).send({ message: 'Ocorreu um erro desconhecido.' });
	}
};

export = {
	createUser,
};
