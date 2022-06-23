import { Block } from '../../core';
import { getChatTemplate } from './Chat.tmpl';
import { ChatProps } from './Chat.types';

export default class Chat extends Block {
  static componentName = 'Chat';

  constructor({ onClick, ...props }: ChatProps) {
    super({
      ...props,
      events: {
        click: onClick,
      },
    });
  }

  render() {
    return getChatTemplate(this.id);
  }
}
