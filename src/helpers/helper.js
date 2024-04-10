import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const sendEmail = (form) => {
  emailjs
    .sendForm("service_mh7wcdq", "template_jmeqzr8", form.current, {
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
      (error) => {
        Swal.fire({
          title: "failed",
          text: "Message Sent Unsuccessfully",
          icon: "error",
        });
        console.log(error);
      }
    );
};

export { sendEmail };
