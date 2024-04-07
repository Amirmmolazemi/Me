import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const sendEmail = (fullName, email, number, body, subject) => {
  const templateParams = `Full Name: ${fullName}
        <br/>
        Email: ${email}
        <br/>
        Phone Number: ${number}
        <br/>
        message: ${body}
        `;

  emailjs
    .send("service_t9wmwtn", "template_f7wwyqi", templateParams)
    .then((message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully",
          icon: "success",
        });
      }
    });
};

export { sendEmail };
