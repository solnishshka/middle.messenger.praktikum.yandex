export enum MessageState {
  read = 'read',
  unread = 'unread',
  undelivered = 'undelivered',
}

export interface MessageProps {
  text?: string;
  image?: string;
  isMy: boolean;
  status?: MessageState;
  time?: string;
}
