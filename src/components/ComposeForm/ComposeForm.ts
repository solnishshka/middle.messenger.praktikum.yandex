import { Block } from "../../core";
import { ValidationRule } from "../../utils/validator";

import { ComposeFormProps } from "./ComposeForm.types";

import * as styles from "./ComposeForm.module.scss";

import attachIcon from "../../images/attach-button.svg";
import sendButtonIcon from "../../images/button.svg";

export default class ComposeForm extends Block {
  static componentName = "ComposeForm";

  constructor({ ...props }: ComposeFormProps) {
    super({
      ...props,
      validationRule: ValidationRule.Message,
      events: {
        submit: (evt: Event) => {
          evt.preventDefault();
          if (!this.element) {
            return;
          }
          // TODO - временно по ТЗ выводим данные формы в консоль
          console.log({
            message: (
              this.element.querySelector(
                `.${styles["compose-form__input-field"]}`
              ) as HTMLInputElement
            ).value,
          });
        },
      },
    });
  }

  render() {
    return `
            <form class="${styles["compose-form"]}" >
                {{{ 
                    ControlledInput 
                        containerClassName="${styles["compose-form__input"]}" 
                        inputClassName="${styles["compose-form__input-field"]}" 
                        placeholder="Сообщение"
                        buttonIcon="${attachIcon}"
                        buttonClassName="${styles["compose-form__input-attach"]}"
                        name="message"
                        validationRule=validationRule
                }}}
                {{{ 
                    Button 
                        img="${sendButtonIcon}" 
                        className="${styles["compose-form__send-button"]}"
                }}}
            </form>
        `;
  }
}
