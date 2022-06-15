export type InputProps = {
  value?: unknown;
  className?: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onBlur?: (event: FocusEvent) => void;
  onInput?: (event: Event) => void;
  onFocus?: (event: FocusEvent) => void;
};
