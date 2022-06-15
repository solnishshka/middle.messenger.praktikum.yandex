import { getFormValues } from '../../utils';
import { Block } from '../../core';
import { formConfig } from './Register.configs';
import { registerPageTemplate } from './Register.tmpl';
import { RegisterProps } from './Register.types';

export default class Register extends Block {
  static componentName = 'Register';

  constructor(props: RegisterProps) {
    super({
      ...props,
      inputs: formConfig,
      onSubmit: () => {
        if (!this.element) {
          return;
        }
        const formValues = getFormValues(this.element);
        // TODO - временно по ТЗ выводим данные формы в консоль
        console.log(formValues);
      },
    });
  }

  render() {
    return registerPageTemplate;
  }
}
