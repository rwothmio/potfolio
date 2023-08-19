import emailjs from "emailjs-com";
import isEmail from "validator/lib/isEmail";

const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!isEmail(e.target.email.value)) {
    alert("please enter your valid email");
    return null;
  }

  emailjs
    .sendForm("meyo100", "template_a9948nq", e.target, "GcUBuoIEncrpDAYps")
    .then((response) => {
      e.target.reset();
      console.log("email sent", response);
      alert("your email has been received");
    })
    .catch((err) => {
      console.warn("email send failed", err);
      alert("there was a problem receiving your email. please try that again");
    });
};

export default handleFormSubmit;
