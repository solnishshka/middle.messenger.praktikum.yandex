import styles from "./Form.module.scss";

export const formTemplate = `
    <form class="form ${styles.form}">
        <h1 class="${styles["form__title"]}">{{title}}</h1>
        {{#each inputs}}
            {{{ 
                Input 
                    label=label
                    containerClasses="${styles["form__item"]} form__item"
                    inputClasses="${styles["form__input"]} form__input"
                    labelClasses="${styles["form__label"]} form__label"
                    name=name
                    required=required
                    type=type
            }}}
        {{/each}}
        {{{ Button text=buttonText classes="${styles["form__button"]}"}}}
        {{{ Link text=linkText href=linkHref classes="${styles["form__link"]}"}}}
    </form>
`;
