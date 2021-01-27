const Checkbox = (props) => {
  const { name, handleChange, isChecked } = props;

  return (
    <>
      <input
        type="checkbox"
        name={name}
        onChange={handleChange}
        checked={isChecked}
        id={name}
      />
      <label htmlFor={name}>
        <span>
          I agree to <a href="#">terms of service</a>
        </span>
      </label>
    </>
  );
};

export default Checkbox;
