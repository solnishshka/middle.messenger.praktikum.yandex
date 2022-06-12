import { Block } from "../../core";
import { chatListTemplate } from "./ChatList.tmpl";

import { ChatListProps } from "./ChatList.types";

import { chats } from "./mock";

export default class ChatList extends Block {
  private _currentChatId?: string | null;

  constructor(props: ChatListProps) {
    super({
      ...props,
      emptyText: "Выберите чат чтобы отправить сообщение",
      chats,
      src: "../../images/test-avatar-first.jpeg",
      settingsIcon: "../../images/settings.svg",
      searchIcon: "../../images/search-icon.svg",
      profilePage: "/profile",
      events: {
        click: (evt: Event) => {
          this._currentChatId = (evt.target as HTMLElement | null)
            ?.closest(".chat")
            ?.getAttribute("data-key");
          this.setProps({
            hasActiveChat: this._currentChatId,
          });
        },
      },
    });
  }

  render() {
    return chatListTemplate;
  }
}
