import { Block } from '../../core';
import { linkTemplate } from './Link.tmpl';
import { LinkProps } from './Link.types';

export default class Link extends Block {
  static componentName = 'Link';

  constructor({ onClick, ...props }: LinkProps) {
    super({ ...props, events: { click: onClick } });
  }

  render() {
    return linkTemplate;
  }
}
