import Input from "./Input.jsx";

function InputBox({ data, styles }) {
  const { type, placeholder, name } = data;
  return (
    <div className={`${styles.inputField} ${styles.field}`}>
      <Input
        type={type}
        placeHolder={placeholder}
        name={name}
        key={name}
        styles={styles}
      />
      <div className={styles.errorText}>invalid {data.placeholder}</div>
    </div>
  );
}

export default InputBox;
