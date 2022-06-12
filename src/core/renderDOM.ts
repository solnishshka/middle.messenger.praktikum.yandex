import Block from "./Block";

export default function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error(`${rootSelector} not found!`);
  }

  const element = component.getContent();

  if (!element) {
      throw new Error("Element not found!")
  }

  component.dispatchComponentDidMount();

  root.innerHTML = "";

  root.append(element);
}
