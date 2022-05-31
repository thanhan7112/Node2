const TextareaField = (props) => {
    const { handleChange, label, name, value, placeholder } = props;
    return (
      <div>
        <label className="text-gray-500 text-sm" htmlFor={name}>
          {label}
        </label>
        <textarea
          onChange={handleChange}
          name={name}
          required
          rows="4"
          className="form-control"
          value={value}
          placeholder={placeholder}
        ></textarea>
        <br></br>
      </div>
    );
  };
  
  export default TextareaField;