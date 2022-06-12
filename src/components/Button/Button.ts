import Block from "../../core/Block";
import { ButtonProps } from "./Button.types";
import { buttonTemplate } from "./Button.tmpl";

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return buttonTemplate;
  }
}
