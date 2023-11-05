import mongoose from 'mongoose';
import { messageSchema } from './schema';

// Class Props
interface IMessage {
    sender: string;
    receiver: string;
    payload: string;
}

// Builder Type
interface MessageModelInterface extends mongoose.Model<MessageDoc> {
    build(attr: IMessage): MessageDoc
}

// Return Type
interface MessageDoc extends mongoose.Document {
    _id: string;
    sender: string;
    receiver: string;
    payload: string;
    createdAt: Date;
    updatedAt: Date;
}

// Build Implementation
messageSchema.statics.build = (attr: IMessage) => {
    return new Message(attr);
};

// Model Creation
const Message = mongoose.model<MessageDoc,MessageModelInterface>('messages', messageSchema);


export { Message, IMessage };
