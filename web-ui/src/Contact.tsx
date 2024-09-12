import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSendClick = () => {
    const templateParams = { email, message };

    emailjs
      .send("service_l2attc9", "template_54p45zv", templateParams, {
        publicKey: "sCR0CUyp55HErWtL1",
        blockHeadless: true,
      })
      .then(
        (response) => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("Could not send email. Please try again later." + error);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-lg bg-gray-800 p-8 rounded-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="john.doe@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-message"
              placeholder="Your message here..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSendClick}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
