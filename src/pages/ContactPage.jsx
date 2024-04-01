import { useTitle } from "../hooks/useTitle.js";

import { firstRowInputs, secondRowInputs } from "../constant/inputs.js";

import InputBox from "../components/InputBox.jsx";

import styles from "./styles/ContactPage.module.css";

function ContactPage() {
  useTitle("contact Me");

  return (
    <div className={styles.contact}>
      <h2>Contact Me !</h2>
      <form action="#" className={styles.contactForm}>
        <div className={styles.inputBox}>
          {firstRowInputs.map((input) => (
            <InputBox data={input} key={input.id} styles={styles} />
          ))}
        </div>
        <div className={styles.inputBox}>
          {secondRowInputs.map((input) => (
            <InputBox data={input} key={input.id} styles={styles} />
          ))}
        </div>
        <div className={`${styles.textAriaField} ${styles.field}`}>
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            className={styles.item}
            autoComplete="off"
          ></textarea>
          <div className={styles.errorText}>message can not be empty</div>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
