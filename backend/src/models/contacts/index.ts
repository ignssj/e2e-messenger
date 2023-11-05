import mongoose from 'mongoose';
import { contactSchema } from './schema';

// Class Props
interface IContact {
    userid: string;
    contact_userid: string;
    name: string;
    publicKey: string;
}

// Builder Type
interface ContactModelInterface extends mongoose.Model<ContactDoc> {
    build(attr: IContact): ContactDoc
}

// Return Type
interface ContactDoc extends mongoose.Document {
    _id: string;
    userid: string;
    contact_userid: string;
    name: string;
    publicKey: string;
    createdAt: Date;
    updatedAt: Date;
}

// Build Implementation
contactSchema.statics.build = (attr: IContact) => {
    return new Contact(attr);
};

// Model Creation
const Contact = mongoose.model<ContactDoc,ContactModelInterface>('contacts', contactSchema);


export { Contact, IContact };
