import { Block } from '../../core';

import { AvatarProps } from './Avatar.types';

import * as styles from './Avatar.module.scss';

export default class Avatar extends Block {
  static componentName = 'Avatar';

  constructor(props: AvatarProps) {
    super({ ...props, src: props.src ?? '../../images/default-avatar.png' });
  }

  render() {
    return `
      <div class="${styles.avatar__container} {{className}}">
        {{{ Image src=src alt="Аватар пользователя" className="${styles.avatar}" }}}
        {{#if uploadIcon}}{{{ Button classes=uploadClassName img=uploadIcon}}}{{/if}}
      </div>
    `;
  }
}
