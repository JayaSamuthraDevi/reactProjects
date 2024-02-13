export type DynamicFormProps = {
  title: string,
  fields: FormFieldProps[];
  initialData?: { [key: string]: string | number };
};

export type BasicButtonProps = {
  clickFunction?: (
    event:
    | React.MouseEvent<HTMLButtonElement>
    | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    | React.FormEvent<HTMLFormElement>
  ) => void;
  btn_type?: any | 'button';
  label?: string | '';
  disabled?: boolean;
  btn_className?: string;
  isDisabled?: boolean;
};

type BaseFieldProps = {
  label?: string;
  name?: string | any;
  type?: string;
  onChange?: () => void;
};

type InputFieldProps = BaseFieldProps & {
  preFillValue?: string;
};

type DropdownProps = BaseFieldProps & {
  options: Array<{
    name:string;
    value: string | number;
    label: string;
  }>;
  defaultValue?: string | number;
};

type FormFieldProps = InputFieldProps | DropdownProps;

export type { InputFieldProps, DropdownProps, FormFieldProps };