export const inputTemplate = `
    <label class="input {{containerClasses}}">
        <input 
            class="input__field {{inputClasses}}" 
            placeholder="{{placeholder}}" 
            name={{name}}
            {{#if value}}value={{value}}{{/if}}
            {{#if disabled}}disabled=true{{/if}}
            {{#if required}}required=true{{/if}}
            type={{type}}
        />
        <span class="input__label {{labelClasses}}">{{label}}</span>
        {{#if src}}
            <img class="input__icon {{iconClasses}}" src="{{src}}"/>
        {{/if}}
        {{#if error}}
            <span class="input__error">{{error}}</span>
        {{/if}}
    </label>
`;
