import { motion } from "framer-motion";
import { skills } from "./compJS/skills";
function Section2() {
  const { codingSkills, designingSkills } = skills();
  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="py-6 md:py-18">
      <div className="text-center">
        <h3 className="text-4xl tracking-wide text-neutral-900 font-thin">
          My Skills
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-20">
        <div className="md:w-1/2 text-center py-2 md:py-4">
          <div>
            <span className="text-xl md:text-2xl font-semibold">
              Coding Skills
            </span>
          </div>
          {codingSkills.map((skill, index) => (
            <motion.div
              variants={listVariants}
              initial="hidden"
              transition={{ type: "spring", duration: 0.9, stiffness: 100 }}
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className="py-2"
            >
              <span className="block font-semibold py-1 text-start">
                {skill.skill}
              </span>
              <div className="w-full bg-neutral-100 p-1 rounded-full border-2 border-red-500">
                <div
                  className={` bg-red-500 rounded-full text-center text-white`}
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.level}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="md:w-1/2 text-center py-2 md:py-4">
          <div>
            <span className="text-xl md:text-2xl font-semibold">
              Designing Skills
            </span>
          </div>
          {designingSkills.map((skill, index) => (
            <motion.div
              variants={listVariants}
              initial="hidden"
              transition={{ type: "spring", duration: 0.9, stiffness: 100 }}
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className="py-2"
            >
              <span className="block font-semibold py-1 text-start">
                {skill.skill}
              </span>
              <div className="w-full bg-neutral-100 p-1 rounded-full border-2 border-red-500">
                <div
                  className={` bg-red-500 rounded-full text-center text-white`}
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.level}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
