interface IChat {
    messages: Message[];
}

type Message = {
    _id: string;
    sender: string;
    receiver: string;
    payload: string;
    createdAt: string;
};