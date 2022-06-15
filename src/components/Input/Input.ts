import { Block } from '../../core';
import { InputProps } from './Input.types';

export default class Input extends Block {
  static componentName = 'Input';

  constructor({
    onBlur, onClick, onInput, ...props
  }: InputProps) {
    super({
      ...props,
      events: {
        click: onClick,
        blur: onBlur,
        input: onInput,
      },
    });
  }

  render() {
    return `
        <input 
          class="input__field {{className}}"
          name="{{name}}"
          {{#if placeholder}}placeholder="{{placeholder}}"{{/if}}
          {{#if value}}value={{value}}{{/if}}
          {{#if id}}id="{{id}}"{{/if}}
          {{#if disabled}}disabled=true{{/if}}
          {{#if required}}required=true{{/if}}
          {{#if type}}type={{type}}{{/if}}
        />
      `;
  }
}
