export interface ButtonProps {
  text: string;
  img?: string;
  classes?: string;
  imgClasses?: string;
  events?: {
    click?: () => void;
  };
}
