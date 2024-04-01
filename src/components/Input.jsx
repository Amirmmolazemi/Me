function Input({ type, name, placeHolder, styles }) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      name={name}
      autoComplete="off"
      className={styles.item}
    />
  );
}

export default Input;
