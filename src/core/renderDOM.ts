import Block from './Block';

export default function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error(`${rootSelector} не найден!`);
  }

  const element = component.getContent();

  if (!element) {
    throw new Error('Элемент не найден!');
  }

  component.dispatchComponentDidMount();

  root.innerHTML = '';

  root.append(element);
}
