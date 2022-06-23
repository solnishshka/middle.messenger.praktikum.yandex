import { InputProps } from '../Input/Input.types';

export interface ModalWithFormProps {
  title: string;
  buttonText: string;
  inputs:InputProps[];
  isVisible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}
