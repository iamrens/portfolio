import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Clicker from "../components/Clicker";
import { Var } from "../utils/framer";

const Contact = () => {
  const { textColor } = useContext(ThemeContext);
  const {
    register,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
      reset();
    }
  };

  return (
    <div className="h-screen overflow-y-auto box-border px-2 mx-auto pt-10 pb-[80px] sm:pb-0">
      <motion.h1
        variants={Var.titles(0.5, "easeInOut", -30)}
        initial="initial"
        animate="animate"
        className="text-center text-[40px] font-poppins font-bold text-titleLight dark:text-titleDark"
      >
        Get in {""}
        <span className={`${textColor}`}>Touch</span>
      </motion.h1>

      <motion.h1
        variants={Var.titles(0.5, "easeInOut", 30)}
        initial="initial"
        animate="animate"
        className="font-poppins text-titleLight dark:text-titleDark pt-5 max-w-[700px] w-[90%] sm:w-[80%] mx-auto text-justify sm:text-left"
      >
        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or oppurtunities to be part of your visions.
      </motion.h1>

      <form
        target="_blank"
        action="https://formsubmit.co/4a19cc0de921aaccb8f776758c9f353d"
        method="POST"
        onSubmit={onSubmit}
        className="mt-10 flex flex-col gap-5 max-w-[700px] w-[95%] sm:w-[80%] mx-auto"
      >
        <div className="flex items-center justify-center gap-5 flex-col sm:flex-row">
          <label className="flex flex-col flex-grow flex-shrink w-full">
            <motion.input
              variants={Var.child(0.8, 'easeInOut', -50)}
              initial="initial"
              animate="animate"
              type="text"
              {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 50,
              })}
              placeholder="Your Name"
              className="contact-input rounded-full"
            />
            {errors.name && (
              <p className="text-red-500 mt-2 font-open text-[14px] pl-5">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "minLength" &&
                  "Min length is 2 characters."}
                {errors.name.type === "maxLength" &&
                  "Max length is 50 characters."}
              </p>
            )}
          </label>
          <label className="flex flex-col flex-grow flex-shrink w-full">
            <motion.input
              variants={Var.child(0.8, 'easeInOut', 100)}
              initial="initial"
              animate="animate"
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              placeholder="Your Email"
              className="contact-input rounded-full"
            />
            {errors.email && (
              <p className="text-red-500 mt-2 font-open text-[14px] pl-5">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          </label>
        </div>
        <label className="flex flex-col">
          <motion.textarea
            variants={Var.titles(0.8, 'easeInOut', -50)}
            initial="initial"
            animate="animate"
            rows={5}
            name="message"
            {...register("message", {
              required: true,
              minLength: 2,
              maxLength: 2000,
            })}
            placeholder="Your Message"
            className="contact-input rounded-[28px]"
          />
          {errors.message && (
            <p className="text-red-500 mt-2 font-open text-[14px] pl-5">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "minLength" &&
                "Min length is 2 characters."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 characters."}
            </p>
          )}
        </label>

        <div className="flex items-center justify-center sm:justify-start">
          <button type="submit" disabled={isSubmitting}>
            <Clicker title={"Send"} icon={<FiSend size={24} />} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
