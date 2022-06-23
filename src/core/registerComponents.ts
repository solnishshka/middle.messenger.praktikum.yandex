import Handlebars, { HelperOptions } from 'handlebars';
import Block from './Block';

export default function registerComponents(Component: typeof Block) {
  Handlebars.registerHelper(
    Component.componentName,
    ({ hash, data }: HelperOptions) => {
      if (!data.root.children) {
        data.root.children = {};
      }

      const { children } = data.root;

      const component = new Component(hash);

      children[component.id] = component;

      return `<div id="${component.id}" data-id="${component.id}"></div>`;
    },
  );
}
