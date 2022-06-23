export interface ImageProps {
  src: string;
  alt: string;
  className: string;
  events?: {
    click?: () => void;
  };
}
