import { Block } from "../../core";

import { validateValue } from "../../utils/validator";

import Error from "../Error";

import { inputTemplate } from "./ControlledInput.tmpl";
import { ControlledInputProps } from "./ControlledInput.types";

export default class ControlledInput extends Block {
  static componentName = "ControlledInput";

  public isValid = true;

  constructor({ validationRule, ...props }: ControlledInputProps) {
    super({
      ...props,
      onFocus: (evt: FocusEvent) => {
        const { value } = evt.target as HTMLInputElement;
        const errorElement = this.getErrorElement();

        if (validationRule && errorElement) {
          const errorText = validateValue(validationRule, value);
          if (errorText !== "") {
            this.isValid = false;
          } else {
            this.isValid = true;
          }
          errorElement.setProps({ errorText });
        }
      },
      onBlur: (evt: FocusEvent) => {
        const { value } = evt.target as HTMLInputElement;
        const errorElement = this.getErrorElement();

        if (validationRule && errorElement) {
          const errorText = validateValue(validationRule, value);
          if (errorText !== "") {
            this.isValid = false;
          } else {
            this.isValid = true;
          }
          errorElement.setProps({ errorText });
        }
      },
    });
  }

  render() {
    return inputTemplate;
  }

  private getErrorElement = (): Error | undefined => {
    let error;

    Object.values(this.children).forEach((value) => {
      if (value instanceof Error) {
        error = value;
      }
    });

    return error;
  };
}
