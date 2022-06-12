import Block from "./Block";
import Handlebars, { HelperOptions } from "handlebars";

export default function registerComponents(Component: typeof Block) {
  Handlebars.registerHelper(
    Component.name,
    function ({ hash: { ...hash }, data }: HelperOptions) {
      if (!data.root.children) {
        data.root.children = {};
      }

      const { children } = data.root;

      const component = new Component(hash);

      children[component.id] = component;

      return `<div id="${component.id}" data-id="${component.id}"></div>`;
    }
  );
}
