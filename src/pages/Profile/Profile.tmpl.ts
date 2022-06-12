import styles from "./Profile.module.scss";

export const profilePageTemplate = `
    <main class="container ${styles.container}">
        <div class="${styles["left-column"]}">
            {{{ Link classes="${styles.link}" img=buttonImg href=mainPage}}}
        </div>
        <div class="content">
            <div class="${styles.actions}">
                {{{ Link text="Выйти" href=loginPage classes="${styles["actions__item"]}" }}}
                {{{ Link text="Удалить профиль" href=deleteProfile classes="${styles["actions__item"]}" }}}
            </div>
            <div class="${styles.profile}">
            {{{ Avatar classes="${styles["avatar__container"]}" uploadClasses="${styles["avatar__upload"]}" src=avatarSrc uploadIcon=uploadIcon }}}
                <h1 class="${styles.name}">{{name}}</h1>
                <form class="${styles.form}">
                    {{{ Input 
                        label="Почта" 
                        containerClasses="${styles.form__item}" 
                        inputClasses="${styles.form__input}" 
                        disabled=true 
                        value="pochta@yandex.ru"
                        name="email"
                    }}}
                    {{{ 
                        Input 
                        label="Логин" 
                        containerClasses="${styles.form__item}" 
                        inputClasses="${styles.form__input}" 
                        disabled=true
                        value="ivanivanov"
                        name="login"
                    }}}
                    {{{ 
                        Input 
                        label="Имя" 
                        containerClasses="${styles.form__item}" 
                        inputClasses="${styles.form__input}" 
                        disabled=true
                        value="Иван"
                        name="first_name"
                    }}}
                    {{{
                        Input 
                        label="Фамилия"
                        containerClasses="${styles.form__item}" 
                        inputClasses="${styles.form__input}" 
                        disabled=true
                        value="Иванов"
                        name="second_name"
                    }}}
                    {{{
                        Input 
                        label="Имя в чате" 
                        containerClasses="${styles.form__item}" 
                        inputClasses="${styles.form__input}" 
                        disabled=true
                        value="Иван"
                        name="display_name"
                    }}}        
                    {{{
                        Input 
                        label="Телефон" 
                        containerClasses="${styles.form__item}" 
                        inputClasses="${styles.form__input}" 
                        disabled=true
                        value="+7(909)967-30-30"
                        name="phone"
                    }}} 
                </form>
                <div class="${styles["change-actions"]}">
                    {{{ Button text="Изменить данные" classes="${styles["change-actions__button"]}"}}}
                    {{{ Button text="Изменить пароль" classes="${styles["change-actions__button"]}"}}}
                </div>
            </div>
        </div>
    </main>
`;
