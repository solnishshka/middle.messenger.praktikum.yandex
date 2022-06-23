import { Block } from "../../core";
import ControlledInput from "../ControlledInput";
import { formTemplate } from "./Form.tmpl";
import { FormProps } from "./Form.types";

export default class Form extends Block {
  static componentName = "Form";

  constructor({ onSubmit, ...props }: FormProps) {
    super({
      ...props,
      events: {
        submit: (evt: SubmitEvent) => {
          evt.preventDefault();
          const invalidForm = Object.values(this.children).some((child) => {
            return child instanceof ControlledInput && !child.isValid;
          });

          if (invalidForm) {
            return;
          }

          onSubmit?.(evt);
        },
      },
    });
  }

  render() {
    return formTemplate;
  }
}
