export enum ValidationRule {
  Login = 'Login',
  Email = 'Email',
  Password = 'Password',
  Message = 'Message',
  FirstName = 'FirstName',
  SecondName = 'SecondName',
  Phone = 'Phone',
}

export function validateValue(rule: ValidationRule, value: string) {
  switch (rule) {
    case ValidationRule.Login:
      if (
        !new RegExp(/^[а-яА-Яa-zA-Z_0-9-]{3,20}$/g).test(value)
        || new RegExp(/^[\d]{3,20}$/g).test(value)
      ) {
        return 'Поле заполнено некорректно';
      }
      return '';

    case ValidationRule.Message:
      if (value.length === 0) {
        return 'Поле обязательно для заполнения';
      }
      return '';

    case ValidationRule.Email:
      if (
        !new RegExp(/^[a-zA-Z\-0-9]{1,}@[a-zA-Z]{1,}.[a-zA-Z]{2,}$/g).test(
          value,
        )
      ) {
        return 'Невалидный email';
      }
      return '';

    case ValidationRule.FirstName:
    case ValidationRule.SecondName:
      if (!new RegExp(/^[A-ZА-Я][а-яa-z-]{1,}$/g).test(value)) {
        return 'Поле заполнено некорректно';
      }
      return '';

    case ValidationRule.Password:
      if (
        !new RegExp(/^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,40}$/g).test(
          value,
        )
      ) {
        return 'Некорректный пароль';
      }
      return '';

    case ValidationRule.Phone:
      if (!new RegExp(/^\+{0,1}[0-9]{10,15}$/g).test(value)) {
        return 'Невалидный номер телефона';
      }
      return '';
  }
}
