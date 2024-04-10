import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const sendEmail = (fullName, email, number, body, subject) => {
  const templateParams = `Full Name: ${fullName}
    <br/> 
    subject: ${subject}
    <br/>
    Email: ${email}
    <br/>
    Phone Number: ${number}
    <br/>
    message: ${body}
   `;

  emailjs
    .sendForm("service_mh7wcdq", "template_jmeqzr8", templateParams, {
      publicKey: "8c8E1YzE9bfpmIGQx",
    })
    .then(
      () => {
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully",
          icon: "success",
        });
      },
      () => {
        Swal.fire({
          title: "failed",
          text: "Message Sent Unsuccessfully",
          icon: "error",
        });
      }
    );
};

export { sendEmail };
