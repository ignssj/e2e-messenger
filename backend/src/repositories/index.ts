import { Model, Document } from 'mongoose'

export const createOne = async <T extends Document>(model: Model<T>, props: Partial<T>): Promise<T | null> => {
    const object = new model(props);
    return await object.save();
};

export const findOne = async <T extends Document>(model: Model<T>, id: string): Promise<T | null> => {
    return await model.findById(id);
}

export const findAll = async <T extends Document>(model: Model<T>, filter: Record<string, unknown>, offset: number, limit: number): Promise<T[]> => {
    return await model.find(filter).skip(offset).limit(limit).exec();
}

export const deleteOne = async <T extends Document> (model: Model<T>, id: string) => {
    return await model.findOneAndDelete({_id: id});
}

export const updateOne = async <T extends Document>(model: Model<T>, id: string, object: Partial<T>): Promise<T | null> => {
    return await model.findOneAndUpdate({_id: id}, object, {new: true});
};