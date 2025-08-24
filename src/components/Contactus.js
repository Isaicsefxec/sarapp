import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pysf7ct",       // Service ID
        "template_088gcip",      // Template ID
        formRef.current,
        "GJYTBtvJyYvhQjuRq"      // Public key
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 4000); // Hide alert after 4s
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

      {success && (
        <motion.div
          className="mb-4 p-3 bg-green-100 text-green-800 rounded text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Message sent! Our team will get back to you. All the best!
        </motion.div>
      )}

     <form ref={formRef} onSubmit={sendEmail}>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full p-2 border rounded mb-4"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full p-2 border rounded mb-4"
  />

  <input
    type="tel"
    name="phonenumber"
    placeholder="Your Phone Number"
    required
    className="w-full p-2 border rounded mb-4"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows="4"
    required
    className="w-full p-2 border rounded mb-4"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
  >
    Send
  </button>
</form>

    </motion.div>
  );
};

export default ContactForm;
