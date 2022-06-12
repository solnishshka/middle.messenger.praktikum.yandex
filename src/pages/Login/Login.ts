import { getFormValues } from "../../utils";
import { Block } from "../../core";
import { formConfig } from "./Login.configs";
import { loginPageTemplate } from "./Login.tmpl";
import { LoginProps } from "./Login.types";

export default class Login extends Block {
  constructor(props: LoginProps) {
    super({
      ...props,
      buttonText: "Войти",
      linkText: "Еще не зарегистрированы?",
      linkHref: "/register",
      inputs: formConfig,
      events: {
        submit: (evt: Event) => {
          evt.preventDefault();
          if (!this.element) {
            return;
          }
          const formValues = getFormValues(this.element);
          // TODO - временно по ТЗ выводим данные формы в консоль
          console.log(formValues);
        },
      },
    });
  }

  render() {
    return loginPageTemplate;
  }
}
