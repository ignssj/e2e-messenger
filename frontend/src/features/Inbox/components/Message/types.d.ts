type ChatMessage = Omit<Message, 'receiver' | 'sender'> & 
{ sentByMe: boolean };