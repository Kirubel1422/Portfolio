import { skills } from "./compJS/skills";
function Section2() {
  const { codingSkills, designingSkills } = skills();
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
            <div key={index} className="py-2">
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
            </div>
          ))}
        </div>
        <div className="md:w-1/2 text-center py-2 md:py-4">
          <div>
            <span className="text-xl md:text-2xl font-semibold">
              Designing Skills
            </span>
          </div>
          {designingSkills.map((skill, index) => (
            <div key={index} className="py-2">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
