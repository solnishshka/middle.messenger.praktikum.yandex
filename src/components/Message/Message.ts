import { Block } from '../../core';
import { messageTemplate } from './Message.tmpl';
import { MessageProps } from './Message.types';

export default class Message extends Block {
  static componentName = 'Message';

  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return messageTemplate;
  }
}
