import { InputType } from '../../consts/input-types';
import { ValidationRule } from '../../utils/validator';

export type ControlledInputProps = {
  labelClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  containerClassName?: string;
  buttonClassName?: string;

  onBlur?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onFocus?: (event: Event) => void;

  type?: InputType;
  validationRule?: ValidationRule;
  name: string;
  label?: string;
  required?: boolean;
};
