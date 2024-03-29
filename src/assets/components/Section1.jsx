import { motion } from "framer-motion";
import myPhoto from "../imgs/photo.jpg";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
function Section1() {
  const photoVariant = {
    hidden: { opacity: 0, x: -200, y: 200 },
    visible: { opacity: 1, x: -1, y: -1 },
  };
  const contentVariant = {
    hidden: { opacity: 0, x: 40, y: 40 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row py-6 md:py-24">
      <div className="md:overflow-hidden flex justify-center py-4 md:w-1/3">
        <motion.div
          variants={photoVariant}
          initial="hidden"
          transition={{ duration: 1.2, type: "spring", stiffness: 20 }}
          whileInView="visible"
          viewport={{ once: true }}
          className="border-red-500 border-8 w-6/7 h-80"
        >
          <img
            src={myPhoto}
            loading="lazy"
            className="object-fit object-center h-80 -translate-x-8 translate-y-4"
          />
        </motion.div>
      </div>
      <motion.div
        variants={contentVariant}
        initial="hidden"
        transition={{ duration: 1.2, type: "spring", stiffness: 20 }}
        whileInView="visible"
        viewport={{ once: true }}
        className="py-4 px-3 md:w-2/3"
      >
        <div className="py-1">
          <h2 className="text-4xl tracking-wide text-neutral-900 font-thin">
            Kirubel Tekle
          </h2>
        </div>
        <div className="py-1">
          <span className="text-xl md:text-2xl text-red-500">
            UX/UI designer and Full Stack Web developer
          </span>
        </div>
        <div>
          <p className="py-3 font-thin text-lg text-neutral-700">
            I excel as both a UX/UI designer and Full Stack Web developer.
            Seamlessly integrating aesthetics with functionality, I design
            intuitive interfaces that prioritize user satisfaction. My skill set
            combines creativity and technical expertise to deliver holistic
            solutions for a seamless user experience.
          </p>
        </div>
        <div className="py-1">
          <ul>
            <li className="py-1 flex space-x-1">
              <GoDotFill className=" text-red-600" size={18} />
              <span className="font-semibold pr-2">From: </span>Jimma, Ethiopia
            </li>
            <li className="py-1 flex space-x-1">
              <GoDotFill className=" text-red-600" size={18} />
              <span className="font-semibold pr-2">Lives in: </span> Dubai, UAE
            </li>
            <li className="py-1 flex space-x-1">
              <GoDotFill className=" text-red-600" size={18} />
              <span className="font-semibold pr-2">Age: </span>19
            </li>
            <li className="py-1 flex space-x-1">
              <GoDotFill className=" text-red-600" size={18} />
              <span className="font-semibold pr-2">Gender: </span>Male
            </li>
          </ul>
        </div>
        <div className="py-3 md:py-5">
          <Link
            target="_blank"
            to="https://drive.google.com/file/d/1hAgRDa-7FVyV--5Ry-YUdlFlwLm1Gz9s/view?usp=drive_link"
            className="text-lg text-red-600 p-4 border-red-500 border-2 bg-white hover:bg-red-500 hover:text-white transition-all duration-400 ease-in rounded-md"
          >
            OPEN CV
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Section1;
