interface Options {
  value: string;
  label: string;
}

interface PropTypes {
  label?: string;
  name: string;
  id: string;
  required?: boolean;
  options?: Options[];
}

const Select = (props: PropTypes) => {
  const { label, name, id, required = false, options } = props;

  return (
    <label htmlFor={id} className="flex flex-col gap-3  mt-2">
      {label}
      <select
        className="px-3 py-2  border border-black rounded-xl text-sm "
        name={name}
        id={id}
        required={required}
      >
        {options?.map((option: Options) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
