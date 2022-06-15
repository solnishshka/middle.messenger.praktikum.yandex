import { getFormValues } from '../../utils';
import { Block } from '../../core';
import { formConfig } from './Login.configs';
import { LoginProps } from './Login.types';

export default class Login extends Block {
  static componentName = 'Login';

  constructor(props: LoginProps) {
    super({
      ...props,
      title: 'Вход',
      buttonText: 'Войти',
      linkText: 'Еще не зарегистрированы?',
      linkHref: '/register',
      inputs: formConfig,
      onSubmit: (evt: Event) => {
        evt.preventDefault();
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
    return `
      <main class="container container_position_center">
        {{{ 
            Form 
                title=title 
                buttonText=buttonText 
                linkText=linkText 
                linkHref=linkHref 
                inputs=inputs
                onSubmit=onSubmit
        }}}
      </main>
    `;
  }
}
