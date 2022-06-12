export const formConfig: {
  name: string;
  label: string;
  type?: HTMLInputElement["type"];
  required?: boolean;
}[] = [
  {
    name: "email",
    label: "Почта",
    required: true,
  },
  {
    label: "Логин",
    name: "login",
    required: true,
  },
  {
    label: "Имя",
    name: "first_name",
    required: true,
  },
  {
    label: "Фамилия",
    name: "second_name",
    required: true,
  },
  {
    label: "Телефон",
    name: "phone",
    required: true,
  },
  {
    label: "Пароль",
    name: "oldPassword",
    required: true,
    type: "password",
  },
  {
    label: "Пароль (еще раз)",
    name: "newPassword",
    required: true,
    type: "password",
  },
];
