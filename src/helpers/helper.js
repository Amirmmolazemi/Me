import Swal from "sweetalert2";

const sendEmail = (fullName, email, number, body, subject) => {
  alert("enter");
  //   const bodyMessage = `Full Name: ${fullName}
  //       <br/>
  //       Email: ${email}
  //       <br/>
  //       Phone Number: ${number}
  //       <br/>
  //       message: ${body}
  //       `;

  //   Email.send({
  //     Host: "smtp.elasticemail.com",
  //     Username: "am.molazemi@gmail.com",
  //     Password: "86E7AC6268111901695DBEA869020F12A7F8",
  //     To: "am.molazemi@gmail.com",
  //     From: email,
  //     Subject: subject,
  //     Body: bodyMessage,
  //   }).then((message) => {
  //     if (message == "OK") {
  //       Swal.fire({
  //         title: "Success",
  //         text: "Message Sent Successfully",
  //         icon: "success",
  //       });
  //     }
  //   });
};

export { sendEmail };
