import { Block } from '../../core';
import { formTemplate } from './Form.tmpl';
import { FormProps } from './Form.types';

export default class Form extends Block {
  static componentName = 'Form';

  constructor({ onSubmit, ...props }: FormProps) {
    super({
      ...props,
      events: {
        submit: onSubmit,
      },
    });
  }

  render() {
    return formTemplate;
  }
}
