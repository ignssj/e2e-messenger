import mongoose from 'mongoose';
import { chatSchema } from './schema';

// Class Props
interface IChat {
    userOne: string;
    userTwo: string;
    lastMessage: string;
}

// Builder Type
interface ChatModelInterface extends mongoose.Model<ChatDoc> {
    build(attr: IChat): ChatDoc
}

// Return Type
interface ChatDoc extends mongoose.Document {
    _id: string;
    userOne: string;
    userTwo: string;
    lastMessage: string;
    createdAt: Date;
    updatedAt: Date;
}

// Build Implementation
chatSchema.statics.build = (attr: IChat) => {
    return new Chat(attr);
};

// Model Creation
const Chat = mongoose.model<ChatDoc,ChatModelInterface>('chats', chatSchema);


export { Chat, IChat };
