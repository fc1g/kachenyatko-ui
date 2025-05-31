export type Contact = {
  type: 'tel' | 'mailto';
  value: string;
  label?: string;
};
