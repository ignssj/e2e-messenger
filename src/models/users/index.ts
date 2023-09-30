import mongoose from 'mongoose';
import { userSchema } from './schema';

// Class Props
interface IUser {
    username: string;
    password: string;
}

// Builder Type
interface UserModelInterface extends mongoose.Model<UserDoc> {
    build(attr: IUser): UserDoc
}

// Return Type
interface UserDoc extends mongoose.Document {
    _id: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

// Build Implementation
userSchema.statics.build = (attr: IUser) => {
    return new User(attr);
};

// Model Creation
const User = mongoose.model<UserDoc,UserModelInterface>('users', userSchema);


export { User, IUser };
