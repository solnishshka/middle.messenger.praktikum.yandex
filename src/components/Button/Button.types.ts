export interface ButtonProps {
  text: string;
  events?: {
    click?: () => void;
  };
}
