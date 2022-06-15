import { ControlledInputProps } from '../ControlledInput/ControlledInput.types';

export interface FormProps {
  onSubmit?: (evt: SubmitEvent) => void;
  title: string;
  buttonText: string;
  linkText?: string;
  linkHref?: string;
  inputs: ControlledInputProps[];
}
