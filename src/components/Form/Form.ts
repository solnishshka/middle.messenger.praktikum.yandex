import { Block } from "../../core";
import { formTemplate } from "./Form.tmpl";
import { FormProps } from "./Form.types";

export default class Form extends Block {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    return formTemplate;
  }
}
