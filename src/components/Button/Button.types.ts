export interface ButtonProps {
  text: string;
  img?: string;
  className?: string;
  imgClassName?: string;
  onClick?: (evt: MouseEvent) => void;
}
