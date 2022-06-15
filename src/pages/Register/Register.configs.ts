import { InputType } from '../../consts/input-types';
import { ControlledInputProps } from '../../components/ControlledInput/ControlledInput.types';
import { ValidationRule } from '../../utils/validator';

export const formConfig: ControlledInputProps[] = [
  {
    name: 'email',
    label: 'Почта',
    required: true,
    validationRule: ValidationRule.Email,
  },
  {
    label: 'Логин',
    name: 'login',
    required: true,
    validationRule: ValidationRule.Login,
  },
  {
    label: 'Имя',
    name: 'first_name',
    required: true,
    validationRule: ValidationRule.FirstName,
  },
  {
    label: 'Фамилия',
    name: 'second_name',
    required: true,
    validationRule: ValidationRule.SecondName,
  },
  {
    label: 'Телефон',
    name: 'phone',
    required: true,
    validationRule: ValidationRule.Phone,
  },
  {
    label: 'Пароль',
    name: 'newPassword',
    required: true,
    type: InputType.Password,
    validationRule: ValidationRule.Password,
  },
  {
    label: 'Пароль (еще раз)',
    name: 'newPasswordCheck',
    required: true,
    type: InputType.Password,
    validationRule: ValidationRule.Password,
  },
];
