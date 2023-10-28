import { IContact, Contact } from "../../models/contacts";

export const createOneContact = async (contactProps: IContact) => {
    const contact = Contact.build(contactProps);
    return await contact.save();
};

export const findOneContact = async (id: string): Promise<IContact | null> => {
    return await Contact.findById(id);
}

export const findAllContacts = async (filter: Record<string, unknown>, offset: number, limit: number): Promise<IContact[]> => {
    return await Contact.find(filter).skip(offset).limit(limit).exec();
}

export const deleteOneContact = async (id: string) => {
    return await Contact.findOneAndDelete<IContact>({_id: id});
}

export const updateOneContact = async (id: string, contact: Partial<IContact>) => {
    return await Contact.findOneAndUpdate<IContact>({_id: id}, contact, {new: true});
}