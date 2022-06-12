export interface IconProps {
  src: string;
  alt: string;
  classes: string;
  events?: {
    click?: () => void;
  };
}
