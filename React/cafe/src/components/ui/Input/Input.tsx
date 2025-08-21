interface PropTypes {
  label?: string;
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  onChange?: () => void;
  required?: boolean;
}

const Input = (props: PropTypes) => {
  const {
    label,
    name,
    id,
    type = "text",
    placeholder,
    onChange,
    required = false,
  } = props;

  return (
    <label htmlFor={id} className="flex flex-col gap-3  mt-2">
      {label}
      <input
        className="px-3 py-2  border border-black rounded-xl text-sm "
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </label>
  );
};

export default Input;
