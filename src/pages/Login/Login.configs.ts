export const formConfig: {
    name: string;
    label: string;
    type?: HTMLInputElement["type"];
    required?: boolean;
  }[] = [
  {
    label: "Логин",
    name: "login",
    required: true,
  },
  {
    label: "Пароль",
    name: "password",
    required: true,
    type: "password",
  },
];
