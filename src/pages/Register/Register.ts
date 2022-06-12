import { getFormValues } from "../../utils";
import { Block } from "../../core";
import { formConfig } from "./Register.configs";
import { registerPageTemplate } from "./Register.tmpl";
import { RegisterProps } from "./Register.types";

export default class Register extends Block {
  constructor(props: RegisterProps) {
    super({
      ...props,
      buttonText: "Создать аккаунт",
      linkText: "Уже есть аккаунт? Войти",
      linkHref: "/login",
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
    return registerPageTemplate;
  }
}
