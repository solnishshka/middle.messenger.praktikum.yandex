import * as styles from './Form.module.scss';

export const formTemplate = `
    <form class="form ${styles.form}">
        <h1 class="${styles.form__title}">{{title}}</h1>
        {{#each inputs}}
            {{{ 
                ControlledInput 
                    label=label
                    containerClassName="${styles.form__item} form__item"
                    inputClassName="${styles.form__input} form__input"
                    labelClassName="${styles.form__label} form__label"
                    name=name
                    required=required
                    type=type
                    placeholder=placeholder
                    buttonIcon=buttonIcon
                    buttonClassName=buttonClassName
                    validationRule=validationRule
            }}}
        {{/each}}
        {{{ Button text=buttonText className="${styles.form__button}"}}}
        {{#if linkHref}}
            {{{ Link text=linkText href=linkHref classes="${styles.form__link}"}}}
        {{/if}}
    </form>
`;
