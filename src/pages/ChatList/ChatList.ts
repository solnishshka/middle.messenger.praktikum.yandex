import { Block } from "../../core";
import { chatListTemplate } from "./ChatList.tmpl";

import { ChatListProps } from "./ChatList.types";

import { chats } from "./mock";

export default class ChatList extends Block {
  private _currentChatId?: string | null;

  constructor(props: ChatListProps) {
    super({
      ...props,
      chats,
      events: {
        click: (evt: Event) => {
          console.log("click");
          const activeChat = (evt.target as HTMLElement | null)?.closest(
            ".chat"
          );

          this._currentChatId = activeChat?.getAttribute("data-key");

          this.setProps({
            hasActiveChat: this._currentChatId ? true : false,
          });
        },
      },
    });
  }

  render() {
    return chatListTemplate;
  }
}
