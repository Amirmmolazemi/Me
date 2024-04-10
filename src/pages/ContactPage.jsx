import { useRef, useState } from "react";
import { useTitle } from "../hooks/useTitle.js";

import { sendEmail } from "../helpers/helper.js";
import { inputs } from "../constant/inputs.js";
import Swal from "sweetalert2";

import styles from "./styles/ContactPage.module.css";

function ContactPage() {
  const form = useRef();
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    body: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const valu = event.target.value;
    setValue((items) => ({
      ...items,
      [name]: valu,
    }));
  };

  useTitle("contact");

  const clickHandler = (event) => {
    event.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex =
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;

    if (
      value.name.length > 0 &&
      emailRegex.test(value.email) &&
      phoneRegex.test(value.phone) &&
      value.subject.length > 0 &&
      value.body.length > 0
    ) {
      sendEmail(form);
    } else {
      Swal.fire({
        title: "Invalid Data",
        text: "Your Message Is Not Valid Please Fix Your Message",
        icon: "error",
      });
    }
  };

  return (
    <div className={styles.contact}>
      <h2>Contact Me !</h2>
      <form className={styles.contactForm} ref={form}>
        {inputs.map((input) => (
          <input
            type={input.type}
            key={input.id}
            name={input.name}
            autoComplete="off"
            placeholder={input.placeholder}
            value={value[input.name]}
            onChange={changeHandler}
          />
        ))}
        <textarea
          rows="10"
          placeholder="Your Message"
          autoComplete="off"
          name="body"
          onChange={changeHandler}
        ></textarea>
        <button onClick={clickHandler}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
