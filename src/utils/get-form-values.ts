export const getFormValues = (container: HTMLElement) => Array.from(
  (container?.querySelectorAll(
    'input',
  ) as NodeListOf<HTMLInputElement> | null) ?? [],
).reduce((acc, curr: { name: string; value: unknown }) => {
  acc[curr.name] = curr.value;
  return acc;
}, {} as Record<string, unknown>);
