import './InputGeneric.scss'

interface InputGenericProps {
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  style?: any;
  required?: boolean;
}

const InputGeneric = (props: InputGenericProps) => {
  const { value, onChange, placeholder, type, name, id, disabled, style, required } = props;

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      disabled={disabled}
      className="input-generic"
      style={style}
      required={required}
    />
  );
};

export default InputGeneric;