import React from "react";
import "../Contact/contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="form">
        <form>
          <h1>Contact Midas Touch</h1>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="text" name-="email" placeholder="Your email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            placeholder="Enter a message"
            required
          ></textarea>
          <button type="submit" class="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
