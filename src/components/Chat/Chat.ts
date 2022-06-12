import { Block } from "../../core";
import { getChatTemplate } from "./Chat.tmpl";
import { ChatProps } from "./Chat.types";

export default class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    return getChatTemplate(this.id);
  }
}
