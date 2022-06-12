import { Block } from "../../core";
import { linkTemplate } from "./Link.tmpl";
import { LinkProps } from "./Link.types";

export default class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return linkTemplate;
  }
}
