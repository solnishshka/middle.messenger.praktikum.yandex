export const buttonTemplate = `
  <button class="button {{classes}}">
    {{#if img}}<img class="button__image {{imgClasses}}" src="{{img}}" />{{/if}}
    {{text}}
  </button>
`;