import { Block } from "../../core";
import {
  messageComposeActiveChatTemplate,
  messageComposeEmptyChatTemplate,
} from "./MessageCompose.tmpl";
import { MessageComposeProps } from "./MessageCompose.types";
import { messages } from "./mock";

export default class MessageCompose extends Block {
  constructor(props: MessageComposeProps) {
    super({
      ...props,
      avatarSrc: "../../images/test-avatar-first.jpeg",
      messages,
    });
  }

  render() {
    return this.props.hasActiveChat
      ? messageComposeActiveChatTemplate
      : messageComposeEmptyChatTemplate;
  }
}
