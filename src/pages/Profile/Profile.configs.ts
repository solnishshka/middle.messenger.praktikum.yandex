import { ValidationRule } from '../../utils/validator';

export const formDataInputs = [
  {
    label: 'Почта',
    name: 'email',
    required: true,
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
    validationRule: ValidationRule.Email,
  },
  {
    label: 'Логин',
    name: 'login',
    required: true,
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
    validationRule: ValidationRule.Login,
  },
  {
    label: 'Имя',
    name: 'first_name',
    required: true,
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
    validationRule: ValidationRule.FirstName,
  },
  {
    label: 'Фамилия',
    name: 'second_name',
    required: true,
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
    validationRule: ValidationRule.SecondName,
  },
  {
    label: 'Имя в чате',
    name: 'display_name',
    required: true,
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
  },
  {
    label: 'Телефон',
    name: 'phone',
    required: true,
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
    validationRule: ValidationRule.Phone,
  },
];

export const formPasswordInputs = [
  {
    label: 'Текущий пароль',
    name: 'oldPassword',
    required: true,
    type: 'password',
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
    validationRule: ValidationRule.Password,
  },
  {
    label: 'Новый пароль',
    name: 'newPassword',
    required: true,
    type: 'password',
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
    validationRule: ValidationRule.Password,
  },
  {
    label: 'Новый пароль (еще раз)',
    name: 'newPasswordCheck',
    required: true,
    type: 'password',
    onInput: (evt: Event) => console.log(evt),
    onFocus: (evt: Event) => console.log(evt),
    validationRule: ValidationRule.Password,
  },
];
