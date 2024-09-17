import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sendEmailSuccess, setSendEmailSuccess] = useState<boolean>(false);
  const [sendEmailClicked, setSendEmailClicked] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSendClick = () => {
    setSendEmailClicked(true);
    const templateParams = { email, message };

    emailjs
      .send("service_l2attc9", "template_54p45zv", templateParams, {
        publicKey: "sCR0CUyp55HErWtL1",
        blockHeadless: true,
      })
      .then(
        (res) => {
          setSendEmailSuccess(true);
        },
        (err) => {
          alert("Could not send email. Please email me at erik_vank@brown.edu");
          setError(true);
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
              To: erik_vank@brown.edu
            </label>
          </div>
        </div>
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

        {/* Send button */}
        {!sendEmailClicked && (
          <div className="flex items-center justify-between">
            <button
              className="border border-blue-500 px-4 py-2 text-white rounded hover:bg-blue-500 hover:text-black transition duration-300"
              type="button"
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        )}

        {/* Loading indicator */}
        {sendEmailClicked && !sendEmailSuccess && !error && (
          <svg
            className="animate-spin fill-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity=".25"
            />
            <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
          </svg>
        )}

        {/* Success indicator */}
        {sendEmailSuccess && (
          <svg
            className="fill-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
        )}

        {/* Error indicator */}
        {error && (
          <svg
            className="fill-red-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        )}
      </form>
    </div>
  );
};

export default Contact;
