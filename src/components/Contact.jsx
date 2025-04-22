import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Custom Notification component
const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    // Auto-dismiss after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed sm:top-24 top-[4.5rem] left-1/2 transform -translate-x-1/2 z-50 
                sm:px-6 px-4 sm:py-4 py-3 rounded-xl shadow-xl 
                ${type === "success" ? "bg-[#1a3d2a] border-l-4 border-[#4ade80]" :
          "bg-[#3d1a1a] border-l-4 border-[#f87171]"}
                max-w-[92%] sm:max-w-md w-auto sm:w-full flex items-start`}
    >
      <div className="mr-2 sm:mr-4 flex-shrink-0 pt-0.5">
        {type === "success" ? (
          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#f87171]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>
      <div className="flex-1">
        <p className={`sm:text-lg text-base font-medium ${type === "success" ? "text-[#4ade80]" : "text-[#f87171]"}`}>
          {type === "success" ? "Message Sent!" : "Error"}
        </p>
        <p className="mt-1 text-white text-sm sm:text-base">{message}</p>
      </div>
      <button onClick={onClose} className="flex-shrink-0 ml-2 sm:ml-4">
        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!form.name || !form.email || !form.message) {
      setNotification({
        type: "error",
        message: "Please fill in all fields before sending your message."
      });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setNotification({
        type: "error",
        message: "Please enter a valid email address."
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Piyush Agarwal",
          from_email: form.email,
          to_email: "chatwithapiyush@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setNotification({
            type: "success",
            message: "Thanks for reaching out! I'll get back to you as soon as possible."
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setNotification({
            type: "error",
            message: "Something went wrong. Please try again or contact me directly via email."
          });
        }
      );
  };

  return (
    <>
      <AnimatePresence>
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={closeNotification}
          />
        )}
      </AnimatePresence>

      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-colors focus:ring-2 focus:ring-[#915EFF]'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-colors focus:ring-2 focus:ring-[#915EFF]'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What would you like to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-colors focus:ring-2 focus:ring-[#915EFF]'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all hover:bg-[#915EFF] disabled:opacity-70 disabled:hover:bg-tertiary'
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>

          {/* Alternative contact information */}
          <div className="mt-10 text-secondary">
            <p className="text-sm">
              You can also reach me directly at:{" "}
              <a
                href="mailto:chatwithapiyush@gmail.com"
                className="text-[#915EFF] hover:underline transition-colors"
              >
                chatwithapiyush@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
