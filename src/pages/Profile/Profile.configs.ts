import { ValidationRule } from '../../utils/validator';

export const formDataInputs = [
  {
    label: 'Почта',
    name: 'email',
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
    label: 'Имя в чате',
    name: 'display_name',
    required: true,
  },
  {
    label: 'Телефон',
    name: 'phone',
    required: true,
    validationRule: ValidationRule.Phone,
  },
];

export const formPasswordInputs = [
  {
    label: 'Текущий пароль',
    name: 'oldPassword',
    required: true,
    type: 'password',
    validationRule: ValidationRule.Password,
  },
  {
    label: 'Новый пароль',
    name: 'newPassword',
    required: true,
    type: 'password',
    validationRule: ValidationRule.Password,
  },
  {
    label: 'Новый пароль (еще раз)',
    name: 'newPasswordCheck',
    required: true,
    type: 'password',
    validationRule: ValidationRule.Password,
  },
];
