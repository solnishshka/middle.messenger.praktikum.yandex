export const getFormValues = (container: HTMLElement) => {
  return Array.from(
    (container
      ?.querySelector(".form")
      ?.querySelectorAll(
        ".form__input"
      ) as NodeListOf<HTMLInputElement> | null) ?? []
  ).reduce((acc, curr: { name: string; value: unknown }) => {
    acc[curr.name] = curr.value;
    return acc;
  }, {} as Record<string, unknown>);
};
