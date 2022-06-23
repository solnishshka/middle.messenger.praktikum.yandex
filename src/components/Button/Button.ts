import Block from '../../core/Block';
import { ButtonProps } from './Button.types';
import { buttonTemplate } from './Button.tmpl';

export default class Button extends Block {
  static componentName = 'Button';

  constructor({ onClick, ...props }: ButtonProps) {
    super({ ...props, events: { click: onClick } });
  }

  render() {
    return buttonTemplate;
  }
}
