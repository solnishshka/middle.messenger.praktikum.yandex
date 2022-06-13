import { nanoid } from "nanoid";
import EventBus from "./EventBus";
import Handlebars from "handlebars";

export enum Events {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_RENDER = "flow:render",
  FLOW_CDU = "flow:component-did-update",
}

export default class Block {
  eventBus: () => EventBus<string, unknown[]>;
  props: any;

  public id = nanoid(6);
  private _element: HTMLElement | null = null;
  private _meta: {
    props: any;
  };

  protected children: Record<string, Block>;

  constructor(propsAndChildren = {}) {
    const eventBus = new EventBus();
    const { props, children } = this.getPropsAndChildren(propsAndChildren);
    this._meta = {
      props,
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Events.INIT);
  }

  _registerEvents(eventBus: EventBus<string, unknown[]>) {
    eventBus.on(Events.INIT, this.init.bind(this));
    eventBus.on(Events.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Events.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Events.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  init() {
    this.eventBus().emit(Events.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount(this.props);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount(oldProps: Record<string, unknown>) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Events.FLOW_CDM);
  }

  _componentDidUpdate(
    oldProps: Record<string, unknown>,
    newProps: Record<string, unknown>
  ): void {
    this._render();
    this.componentDidUpdate(oldProps, newProps);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(
    oldProps: Record<string, unknown>,
    newProps: Record<string, unknown>
  ) {
    return true;
  }

  setProps = (nextProps: Record<string, unknown>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _addEvents() {
    const events: Record<string, () => void> = this.props.events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      console.log('event set', event, this._element);
      this._element?.addEventListener(event, listener);
    });
  }

  _removeEvents() {
    const events: Record<string, () => void> = this.props.events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      console.log('event remove', event)
      this._element?.removeEventListener(event, listener);
    });
  }

  _render(): void {
    //this._removeEvents();

    const templateString = this.render();

    const fragment = this.compile(templateString, this.props);

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      //this._removeEvents();
      this._element.replaceWith(newElement);
    } else {
      this._element = newElement;
    }

    this._addEvents();
  }

  getPropsAndChildren(propsAndChildren: any): {
    props: any;
    children: Record<string, Block>;
  } {
    const children = {} as any;
    const props = {} as any;

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  render() {
    return "";
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  _makePropsProxy(props: Record<string, unknown>) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    const proxyProps = new Proxy(props, {
      deleteProperty() {
        throw Error("Нет доступа");
      },
      get(target, prop: string) {
        if (prop.startsWith("_")) {
          throw Error("Нет прав");
        }
        return target[prop];
      },
      set(target, prop: string, value: unknown) {
        if (target[prop] !== value) {
          target[prop] = value;
          self
            .eventBus()
            .emit(Events.FLOW_CDU, target, { ...target, [prop]: value });
          return true;
        }
        return false;
      },
    });
    return proxyProps;
  }

  _createDocumentElement<T extends HTMLElement>(
    tagName: keyof HTMLElementTagNameMap
  ): T {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName) as T;
  }

  show() {
    const element = this.getContent();
    if (!element) {
      return;
    }
    element.style.display = "block";
  }

  hide() {
    const element = this.getContent();
    if (!element) {
      return;
    }
    element.style.display = "none";
  }

  compile(templateString: string, context?: any) {
    const fragment =
      this._createDocumentElement<HTMLTemplateElement>("template");

    const template = Handlebars.compile(templateString);

    const htmlString = template({ ...context, children: this.children });

    fragment.innerHTML = htmlString;

    Object.entries(this.children).forEach(([key, child]) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

      const childContent = child.getContent();

      if (!stub || !childContent) {
        return;
      }

      stub.replaceWith(childContent);
    });

    return fragment.content;
  }
}
