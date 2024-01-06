import { useState } from "react";
import { motion } from "framer-motion";
import db from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "email"), formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      e.target.reset();
      toast.success(" Message sent!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Please try again later!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      e.target.reset();
      console.error(error);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle =
    "w-full focus:bg-neutral-50 border border-neutral-300 p-3 outline-none focus:ring-2 focus:ring-neutral-400 transition-all ease-in duration-400 rounded";
  return (
    <div className="py-6 my-10 flex flex-col justify-center items-center">
      <h3 className="my-5 text-2xl md:texl-4xl text-red-500 font-semibold">
        Let us Talk
      </h3>
      <motion.form
        variants={formVariants}
        initial="hidden"
        transition={{ duration: 2 }}
        whileInView="visible"
        viewport={{ once: true }}
        className="w-11/12 md:w-3/4 lg:w-1/2"
        onSubmit={formHandler}
      >
        <ToastContainer />
        <div className="w-full my-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={inputStyle}
            onChange={changeHandler}
          />
        </div>
        <div className="flex my-2 space-x-2">
          <div className="w-1/2">
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className={inputStyle}
              onChange={changeHandler}
            />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={inputStyle}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="w-full my-2">
          <textarea
            name="message"
            cols="15"
            rows="5"
            className={inputStyle}
            onChange={changeHandler}
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="my-2">
          <input
            type="submit"
            value="Send Message"
            className="text-white placeholder:text-neutral-600 placeholder:font-bold shadow-neutral-200 shadow px-5 py-3 border-white border-2 hover:border-red-500 bg-red-500 cursor-pointer hover:bg-white hover:text-red-500 transition-all duration-400 ease-in rounded-md"
          />
        </div>
      </motion.form>
    </div>
  );
}

export default Contact;
