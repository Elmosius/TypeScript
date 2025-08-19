interface PropTypes {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: () => void;
}

const Input = (props: PropTypes) => {
  const { id, label, type = "text", placeholder, onChange } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} onChange={onChange}></input>
    </div>
  );
};

export default Input;
