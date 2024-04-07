import { useState } from "react";
import { useTitle } from "../hooks/useTitle.js";

import { sendEmail } from "../helpers/helper.js";
import { inputs } from "../constant/inputs.js";
import Swal from "sweetalert2";

import styles from "./styles/ContactPage.module.css";

function ContactPage() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    body: "",
  });
  useTitle("contact");

  const changeHandler = (event) => {
    const name = event.target.name;
    const valu = event.target.value;

    setValue((items) => ({
      ...items,
      [name]: valu,
    }));
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex =
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;

    if (
      !value.name.length > 0 &&
      !emailRegex.test(value.email) &&
      !phoneRegex.test(value.phone) &&
      !value.subject.length > 0 &&
      !value.body.length > 0
    ) {
      Swal.fire({
        title: "Invalid Data",
        text: "Your Message Is Not Valid Please Fix Your Message",
        icon: "error",
      });
    } else {
      sendEmail(
        value.name,
        value.email,
        value.phone,
        value.body,
        value.subject
      );
    }
  };

  return (
    <div className={styles.contact}>
      <h2>Contact Me !</h2>
      <form className={styles.contactForm}>
        <div className={styles.inputBox}>
          {inputs[0].map((input) => (
            <div
              className={`${styles.inputField} ${styles.field}`}
              key={input.id}
            >
              <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                autoComplete="off"
                className={styles.item}
                value={value[input.name]}
                onChange={changeHandler}
              />
              <div className={styles.errorText}>
                invalid {input.placeholder}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.inputBox}>
          {inputs[1].map((input) => (
            <div
              className={`${styles.inputField} ${styles.field}`}
              key={input.id}
            >
              <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                autoComplete="off"
                className={styles.item}
                value={value[input.name]}
                onChange={changeHandler}
              />
              <div className={styles.errorText}>
                invalid {input.placeholder}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.textAriaField} ${styles.field}`}>
          <textarea
            rows="10"
            placeholder="Your Message"
            className={styles.item}
            autoComplete="off"
            name="body"
            onChange={changeHandler}
          ></textarea>
          <div className={styles.errorText}>message can not be empty</div>
        </div>

        <button onClick={clickHandler}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
