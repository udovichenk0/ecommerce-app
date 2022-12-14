export type PropsType = {
  register: (name: any, RegisterOptions?) => { onChange; onBlur; name; ref };
  label: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  errors?: any;
};
