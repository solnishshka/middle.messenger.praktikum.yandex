import { Block } from '../../core';

import { ErrorProps } from './Error.types';

import * as styles from './Error.module.scss';

export default class Error extends Block {
  static componentName = 'Error';

  constructor(props: ErrorProps) {
    super(props);
  }

  render() {
    return `
        <div class="${styles.error} {{className}}">{{#if errorText}}{{errorText}}{{/if}}</div>
    `;
  }
}
