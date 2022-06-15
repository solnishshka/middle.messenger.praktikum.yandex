import { Block } from "../../core";

import { AvatarProps } from "./Avatar.types";

import * as styles from "./Avatar.module.scss";

import defaultAvatar from "../../images/default-avatar.png";

export default class Avatar extends Block {
  static componentName = "Avatar";

  constructor(props: AvatarProps) {
    super({ ...props, src: props.src ?? `${defaultAvatar}` });
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
