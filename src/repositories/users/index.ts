import { IUser, User } from "../../models/users";

export const createOneUser = async (userProps: IUser) => {
    const user = User.build(userProps);
    return await user.save();
};

export const findOneUser = async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
}

export const findAllUsers = async (filter: Record<string, unknown>, offset: number, limit: number): Promise<IUser[]> => {
    return await User.find(filter).skip(offset).limit(limit).exec();
}

export const deleteOneUser = async (id: string) => {
    return await User.findOneAndDelete<IUser>({_id: id});
}

export const updateOneUser = async (id: string, contact: Partial<IUser>) => {
    return await User.findOneAndUpdate<IUser>({_id: id}, contact, {new: true});
}