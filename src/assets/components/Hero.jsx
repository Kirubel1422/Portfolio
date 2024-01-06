import { motion } from "framer-motion";
import { CiDesktopMouse1 } from "react-icons/ci";
import bg from "../imgs/hero.jpg";

function Hero() {
  const divVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div
      className="relative h-screen bg-center bg-cover bg-neutral-700 bg-blend-overlay "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        variants={divVariant}
        initial="hidden"
        transition={{ duration: 1.3, delay: 0.2 }}
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute text-neutral-50 text-center w-full "
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="py-1">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.3, type: "tween" }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:text-4xl text-3xl"
          >
            Welcome
          </motion.div>
        </div>
        <div className="py-1">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.3, type: "tween" }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl tracking-wider"
          >
            I am <span className="text-red-500">Kirubel</span> Tekle
          </motion.p>
        </div>
        <div className="py-2 mt-4 flex justify-center">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.3, type: "tween" }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-md md:text-2xl text-white tracking-wide py-3 md:py-5 rounded-lg md:rounded-full px-4 backdrop-blur-sm font-semibold bg-red-200 bg-opacity-30 w-fit"
          >
            UX/UI designer and Full Stack Web developer
          </motion.p>
        </div>
      </motion.div>
      <div className="absolute left-1/2 bottom-10">
        <CiDesktopMouse1 size={30} className="text-white animate-bounce" />
      </div>
    </div>
  );
}

export default Hero;
