import { ControlledInputProps } from '../../components/ControlledInput/ControlledInput.types';
import { InputType } from '../../consts/input-types';
import { ValidationRule } from '../../utils/validator';

export const formConfig: ControlledInputProps[] = [
  {
    label: 'Логин',
    name: 'login',
    required: true,
    validationRule: ValidationRule.Login,
  },
  {
    label: 'Пароль',
    name: 'password',
    required: true,
    type: InputType.Password,
    validationRule: ValidationRule.Password,
  },
];
