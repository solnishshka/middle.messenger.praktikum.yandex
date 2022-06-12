export type Listener<T extends unknown[]> = (...args: T) => void;

export default class EventBus<TEventKey extends string, TArray extends unknown[] >{
    private listeners: {[key in TEventKey]?: Listener<TArray>[]} = {};

    constructor() {
    }
  
    on(event: TEventKey, callback: Listener<TArray>) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event]?.push(callback);
    }
  
    off(event: TEventKey, callback: Listener<TArray>) {
      if (!event) {
        throw Error(`Нет события: ${event}`);
      }
      
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      
      this.listeners[event] = this.listeners[event]?.filter(listener => listener !== callback);
    }
  
    emit(event: TEventKey, ...args: TArray) {
      if (!event || !this.listeners[event]) {
        throw Error(`Нет события: ${event}`);
      }
      
      this.listeners[event]?.forEach((listener) => {
        listener(...args);
      });
    }
  }
