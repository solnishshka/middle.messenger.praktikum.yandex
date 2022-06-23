export interface ChatProps {
  src: string;
  onClick?: () => void;
  className?: string;
  avatarClassName?: string;
  count: number;
  time: string;
  lastMessageContent?: string;
  title: string;
}
