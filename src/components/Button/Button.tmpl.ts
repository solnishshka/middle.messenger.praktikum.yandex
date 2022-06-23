import * as styles from './Button.module.scss';

export const buttonTemplate = `
  <button class="${styles.button} {{className}}">
    {{#if img}}{{{ Image className=imgClassName src=img alt="Кнопка"}}}{{/if}}
    {{text}}
  </button>
`;
