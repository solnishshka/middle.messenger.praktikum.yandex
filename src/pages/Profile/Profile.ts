import { Block } from '../../core';

import { ProfileProps } from './Profile.types';

import { profilePageTemplate } from './Profile.tmpl';
import { formDataInputs, formPasswordInputs } from './Profile.configs';
import { getFormValues } from '../../utils';

export default class Profile extends Block {
  static componentName = 'Profile';

  constructor(props: ProfileProps) {
    super({
      ...props,
      loginPage: '/login',
      mainPage: '/',
      deleteProfile: '/error',
      name: 'Анастасия',
      avatarSrc: '../../images/avatar.jpg',
      buttonImg: '../../images/button.svg',
      uploadIcon: '../../images/upload.svg',
      isVisible: false,
      title: '',
      buttonText: 'Сохранить',
      inputs: [],
      handleChangeData: () => {
        this.setProps({
          isVisible: true,
          title: 'Изменить данные профиля',
          inputs: formDataInputs,
        });
      },
      handleChangePassword: () => {
        this.setProps({
          isVisible: true,
          title: 'Изменить пароль',
          inputs: formPasswordInputs,
        });
      },
      onClose: () => {
        this.setProps({ isVisible: false });
      },
      onSubmit: (evt: SubmitEvent) => {
        evt.preventDefault();
        // TODO - данные временно в консоль
        const values = getFormValues(evt.target as HTMLFormElement);
        console.log(values);
        this.setProps({ isVisible: false });
      },
    });
  }

  render() {
    return profilePageTemplate;
  }
}
