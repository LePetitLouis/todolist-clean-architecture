import './InputCheckbox.scss';

// import IconCheck from '../../../../shared/icons/icon-check.svg';

interface InputCheckboxProps {
  checked: boolean;
  onChange: (e: any) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  style?: any;
  required?: boolean;
}

const InputCheckbox = (props: InputCheckboxProps) => {
  const { checked, onChange, name, id, disabled, style, required } = props;

  return (
    <input
      checked={checked}
      onChange={onChange}
      type="checkbox"
      name={name}
      id={id}
      disabled={disabled}
      className="input-checkbox"
      style={style}
      required={required}
    />
  );
};

export default InputCheckbox;