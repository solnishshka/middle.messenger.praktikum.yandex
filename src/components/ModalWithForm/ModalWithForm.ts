import { Block } from "../../core";
import { ModalWithFormProps } from "./ModalWithForm.types";

import * as styles from "./ModalWithForm.module.scss";

import closeButton from "../../images/close-button.svg";

export default class ModalWithForm extends Block {
  static componentName = "ModalWithForm";

  constructor(props: ModalWithFormProps) {
    super(props);
  }

  render() {
    return `
        <div class="${styles.modal} {{#if isVisible}}${styles.modal_visible}{{/if}}">
            <div class="${styles.modal__content}">
                {{{Button 
                  className="${styles["modal__close-button"]}" 
                  onClick=onClose 
                  img="${closeButton}"
                }}}
                {{{Form
                  title=title
                  buttonText=buttonText
                  inputs=inputs
                  onSubmit=onSubmit
                }}}
            </div>
        </div>
    `;
  }
}
