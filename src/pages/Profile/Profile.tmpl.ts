import * as styles from "./Profile.module.scss";

export const profilePageTemplate = `
    <main class="container ${styles.container}">
        <div class="${styles["left-column"]}">
            {{{ Link classes="${styles.link}" img=buttonImg href=mainPage}}}
        </div>
        <div class="content">
            <div class="${styles.actions}">
                {{{Link 
                    text="Выйти" 
                    href=loginPage 
                    classes="${styles.actions__item}" 
                }}}
                {{{Link 
                    text="Удалить профиль" 
                    href=deleteProfile 
                    classes="${styles.actions__item}"
                }}}
            </div>
            <div class="${styles.profile}">
            {{{Avatar 
                className="${styles.avatar__container}" 
                uploadClassName="${styles.avatar__upload}" 
                src=avatarSrc 
                uploadIcon=uploadIcon 
            }}}
                <h1 class="${styles.name}">{{name}}</h1>
                <form class="${styles.form}">
                    {{{ ControlledInput 
                            label="Почта" 
                            containerClassName="${styles.form__item}" 
                            inputClassName="${styles.form__input}" 
                            disabled=true 
                            value="pochta@yandex.ru"
                            name="email"
                    }}}
                    {{{ 
                        ControlledInput 
                            label="Логин" 
                            containerClassName="${styles.form__item}" 
                            inputClassName="${styles.form__input}" 
                            disabled=true
                            value="ivanivanov"
                            name="login"
                    }}}
                    {{{ 
                        ControlledInput 
                            label="Имя" 
                            containerClassName="${styles.form__item}" 
                            inputClassName="${styles.form__input}" 
                            disabled=true
                            value="Иван"
                            name="first_name"
                    }}}
                    {{{
                        ControlledInput 
                            label="Фамилия"
                            containerClassName="${styles.form__item}" 
                            inputClassName="${styles.form__input}" 
                            disabled=true
                            value="Иванов"
                            name="second_name"
                    }}}
                    {{{
                        ControlledInput 
                            label="Имя в чате" 
                            containerClassName="${styles.form__item}" 
                            inputClassName="${styles.form__input}" 
                            disabled=true
                            value="Иван"
                            name="display_name"
                    }}}        
                    {{{
                        ControlledInput 
                            label="Телефон" 
                            containerClassName="${styles.form__item}" 
                            inputClassName="${styles.form__input}" 
                            disabled=true
                            value="+7(909)967-30-30"
                            name="phone"
                    }}} 
                </form>
                <div class="${styles["change-actions"]}">
                    {{{Button 
                        text="Изменить данные" 
                        className="${styles["change-actions__button"]}" 
                        onClick=handleChangeData
                    }}}
                    {{{Button 
                        text="Изменить пароль" 
                        className="${styles["change-actions__button"]}" 
                        onClick=handleChangePassword
                    }}}
                </div>
            </div>
        </div>
        {{{ModalWithForm 
            isVisible=isVisible 
            title=title 
            buttonText=buttonText 
            inputs=inputs 
            onClose=onClose 
            onSubmit=onSubmit
        }}}
    </main>
`;
