import { Block } from "../../core";
import { IconProps } from "./Icon.types";
import { iconTemplate } from "./Icon.tmpl";

export default class Icon extends Block {
  constructor(props: IconProps) {
    super(props);
  }

  render() {
    return iconTemplate;
  }
}
