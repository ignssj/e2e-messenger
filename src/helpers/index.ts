import Models from '../models';

const insertNewDocument = async (modelDb: string, storeObj: any) => {
	const data = new Models[modelDb](storeObj);
	return await data.save();
};

export {
	insertNewDocument
};