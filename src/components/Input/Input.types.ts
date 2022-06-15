export type InputProps = {
  value?: unknown;
  className?: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onClick?: (event: Event) => void;
  onBlur?: (event: Event) => void;
  onInput?: (event: Event) => void;
};
