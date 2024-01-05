import { info } from "./compJS/info";
import { GoDotFill } from "react-icons/go";

function Section3() {
  const { education, experience } = info();
  return (
    <div className="flex flex-col md:flex-row space-x-6 md:space-x-10 py-6">
      <div>
        <div>
          <h3 className="text-3xl tracking-wide text-neutral-900">Education</h3>
        </div>
        <div>
          {education.map((education, index) => (
            <div key={index} className="my-5 shadow-neutral-200 shadow-sm ">
              <div className="w-fit h-fit">
                <span
                  className={`p-1 md:p-2 rounded-br-full rounded-l-full text-white ${
                    !education.graduated ? "bg-red-500" : "bg-neutral-500"
                  } `}
                >
                  {education.date}{" "}
                  {!education.graduated && <span>- Current</span>}
                </span>
              </div>
              <div className="p-2 md:p-5 bg-neutral-100">
                <div>
                  <h4 className="md:text-xl text-red-500 pt-1">
                    {education.major}
                  </h4>
                </div>
                <div>
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center">
                  <GoDotFill className=" text-red-600" size={18} />
                  <p className="p-1 font-thin">{education.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-3xl tracking-wide text-neutral-900">
            Experience
          </h3>
        </div>
        {experience.map((experience, index) => (
          <div key={index} className="my-5 shadow-neutral-200 shadow-sm ">
            <div className="w-fit h-fit">
              <span
                className={`p-1 md:p-2 rounded-br-full rounded-l-full text-white ${
                  experience.current ? "bg-red-500" : "bg-inherit"
                } `}
              >
                {experience.date} {experience.current && <span>- Current</span>}
              </span>
            </div>
            <div className="p-2 md:p-5 bg-neutral-100">
              <div>
                <h4 className="md:text-xl text-red-500 pt-1">
                  {experience.position}
                </h4>
              </div>
              <div>
                <span>{experience.company}</span>
              </div>
              <div className="flex items-center">
                <GoDotFill className=" text-red-600" size={18} />
                <p className="p-1 font-thin">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
