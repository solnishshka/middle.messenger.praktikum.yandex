import * as styles from './ControlledInput.module.scss';

export const inputTemplate = `
    <label class="input ${styles.input__container} {{containerClassName}}">
        {{{ 
            Input 
                className=inputClassName
                placeholder=placeholder
                name=name
                id=id
                value=value
                disabled=disabled
                required=required
                type=type
                onClick=onClick
                onBlur=onBlur
                onInput=onInput
        }}}
        <span class="input__label {{labelClassName}}">{{label}}</span>
        {{#if src}}
            <img class="input__icon {{iconClassName}}" src="{{src}}"/>
        {{/if}}
        {{{ Error }}}
        {{#if buttonIcon}}
            {{{ Button  
                img=buttonIcon
                className=buttonClassName
            }}}
        {{/if}}
    </label>
`;
