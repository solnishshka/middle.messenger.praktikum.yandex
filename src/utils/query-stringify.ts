/** Утилита для преобразования объекта в строку запроса */
export const queryStringify = (data: Record<string, unknown>): string => {
    return Object.entries(data).reduce((acc, currentValue) => {
      const [key, value] = currentValue;
      const separator = acc === "?" ? "" : "&";
      return `${acc}${separator}${key}=${value}`;
    }, "?");
  }