import { IMessage, Message } from "../../models/messages";

export const createOneMessage = async (messageProps: IMessage) => {
    const message = Message.build(messageProps);
    return await message.save();
};

export const findOneMessage = async (id: string): Promise<IMessage | null> => {
    return await Message.findById(id);
}

export const findAllMessages = async (filter: Record<string, unknown>, offset: number, limit: number): Promise<IMessage[]> => {
    return await Message.find(filter).skip(offset).limit(limit).exec();
}

export const deleteOneMessage = async (id: string) => {
    return await Message.findOneAndDelete<IMessage>({_id: id});
}

export const updateOneMessage = async (id: string, contact: Partial<IMessage>) => {
    return await Message.findOneAndUpdate<IMessage>({_id: id}, contact, {new: true});
}