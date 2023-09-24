import { Request, Response } from 'express';

interface IUser {
    username: string;
    password: string;
}

export const createUser = async (req: Request<{},{},IUser>, res: Response) => {
	try {
		return res.status(200).send('Create user');
	} catch (e: unknown) {
		res.status(400).send({ message: 'Ocorreu um erro desconhecido.' });
	}
};
