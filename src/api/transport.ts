import { METHODS } from '../consts/api-methods';
import { queryStringify } from '../utils';

interface RequestOptions {
  data?: Record<string, unknown>;
  timeout?: number;
  headers?: Record<string, string>;
}
interface IHttpTransport {
  get: (url: string, options?: RequestOptions) => Promise<unknown>;

  post: (url: string, options?: RequestOptions) => Promise<unknown>;

  put: (url: string, options?: RequestOptions) => Promise<unknown>;

  delete: (url: string, options?: RequestOptions) => Promise<unknown>;

  _request: (
    url: string,
    options: Omit<RequestOptions, 'data'> & {
      method: string;
      data?: unknown;
    },
    timeout?: number
  ) => Promise<unknown>;
}
export default class HttpTransport implements IHttpTransport {
  get = (url: string, options: RequestOptions = {}) => {
    const reqUrl = options.data ? `${url}${queryStringify(options.data)}` : url;
    return this._request(
      reqUrl,
      { ...options, method: METHODS.GET },
      options.timeout,
    );
  };

  post = (url: string, options: RequestOptions = {}) => this._request(
    url,
    {
      ...options,
      method: METHODS.POST,
      data: { body: JSON.stringify(options.data) },
      headers: { 'Content-type': 'application/json; charset=utf-8' },
    },
    options.timeout,
  );

  put = (url: string, options: RequestOptions = {}) => this._request(
    url,
    { ...options, method: METHODS.PUT },
    options.timeout,
  );

  delete = (url: string, options: RequestOptions = {}) => this._request(
    url,
    { ...options, method: METHODS.DELETE },
    options.timeout,
  );

  // TODO - подумать над типизацией
  _request = (
    url: string,
    options: Omit<RequestOptions, 'data'> & { method: string; data?: unknown },
    timeout = 5000,
  ) => {
    const { data, headers, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.timeout = timeout;

      xhr.onload = function () {
        resolve(xhr);
      };

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as XMLHttpRequestBodyInit);
      }
    });
  };
}
