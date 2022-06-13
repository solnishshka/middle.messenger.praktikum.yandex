import { MessageProps } from "../Message/Message.types";

export interface MessageComposeProps {
  hasActiveChat?: boolean;
  userName: string;
  // TODO - Вынести интерфейс сообщения и енумку со статусами в общие константы
  messages: MessageProps[];
}
