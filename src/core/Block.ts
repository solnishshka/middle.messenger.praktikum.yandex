import { nanoid } from "nanoid";
import Handlebars from "handlebars";
import EventBus from "./EventBus";

export enum Events {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_RENDER = "flow:render",
  FLOW_CDU = "flow:component-did-update",
}

export default class Block {
  eventBus: () => EventBus<string, unknown[]>;

  // TODO - types
  props: any;

  static componentName: string;

  public id = nanoid(6);

  private _element: Nullable<HTMLElement> = null;

  protected refs?: Record<string, Block> = {};

  protected children: Record<string, Block>;

  constructor(propsAndChildren = {}) {
    const eventBus = new EventBus();
    const { props, children } = this.getPropsAndChildren(propsAndChildren);

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

  componentDidMount(_: Record<string, unknown>) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Events.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any): void {
    this._render();
    this.componentDidUpdate(oldProps, newProps);
  }

  componentDidUpdate(_: any, __: any) {
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
    const { events } = this.props;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element?.addEventListener(event, listener as () => void);
    });
  }

  _removeEvents() {
    const { events } = this.props;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element?.removeEventListener(event, listener as () => void);
    });
  }

  _render(): void {
    const templateString = this.render();

    const fragment = this.compile(templateString, this.props);

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

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

  getContent(): Nullable<HTMLElement> {
    return this.element;
  }

  _makePropsProxy(props: Record<string, unknown>) {
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
        target[prop] = value;
        self
          .eventBus()
          .emit(Events.FLOW_CDU, target, { ...target, [prop]: value });
        return true;
      },
    });
    return proxyProps;
  }

  _createDocumentElement<T extends HTMLElement>(
    tagName: keyof HTMLElementTagNameMap
  ): T {
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
