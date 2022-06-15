import { ValidationRule } from '../../utils/validator';
import { Block } from '../../core';
import { chatListTemplate } from './ChatList.tmpl';

import { ChatListProps } from './ChatList.types';

import { chats } from './mock';

export default class ChatList extends Block {
  static componentName = 'ChatList';

  private _currentChatId?: string | null;

  constructor(props: ChatListProps) {
    super({
      ...props,
      chats: chats.map((chat) => ({
        ...chat,
        // TODO - реализовать нормальную передачу колбека для выбора активного чата
        onClick: (evt: Event) => {
          const activeChatElement = (evt.target as HTMLElement | null)?.closest(
            '.chat',
          );

          this._currentChatId = activeChatElement?.getAttribute('data-key');

          const activeChat = Object.values(this.children).find(
            (item) => item.id === this._currentChatId,
          );

          this.setProps({
            hasActiveChat: !!this._currentChatId,
            userName: activeChat?.props.title,
            avatarSrc: activeChat?.props.src,
          });
        },
      })),
      validationRule: ValidationRule.Login,
    });
  }

  render() {
    return chatListTemplate;
  }
}
