import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState(
    "Bộ phận xử lý đơn sẽ trả lời đơn/ email của bạn trong vòng 24h"
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uifporr", "template_krt2go8", form.current, {
        publicKey: "dyh_xG655S4zhdEnh",
      })
      .then(
        () => {
          setMessage("Email sent successfully!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          setMessage("Failed to send email. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form
      id="form"
      ref={form}
      onSubmit={sendEmail}
    >
      <fieldset style={{ borderWidth: "0px" }}>
        <label>
          <strong>Name: </strong>
          <input
            type="text"
            name="from_name"
          />
          <strong className="clear" />
        </label>
        <label>
          <strong>Email: </strong>
          <input
            type="text"
            name="from_email"
          />
          <strong className="clear" />
        </label>

        <div className="button-send-contact">
          <label>
            <strong>Message</strong>
            <textarea name="message" />
          </label>
          <button
            type="submit"
            value="Send"
            className="link-2"
          >
            Send
          </button>
          {message && <p className="message-notify">{message}</p>}
        </div>
      </fieldset>
      {/* {message} */}
    </form>
  );
}
export default ContactForm;
