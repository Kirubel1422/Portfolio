import { MdDesignServices } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCode } from "react-icons/md";
import { MdMonitor } from "react-icons/md";
function Section4() {
  return (
    <div className="md:py-10 py-6 my-10">
      <div className="block text-center py-5 md:py-10">
        <div className="flex justify-center py-2">
          <h2 className="span-2 bg-red-100 text-red-600 font-semibold rounded-xl text-sm px-5">
            Service
          </h2>
        </div>
        <div>
          <span className="text-2xl md:text-3xl tracking-wider font-thin text-neutral-900 py-5">
            What I can do?
          </span>
        </div>
      </div>
      <div className="py-2">
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-2">
          <div className="flex flex-col justify-center items-center">
            <span className="bg-neutral-100 p-4 md:p-8 rounded-full -z-50 block w-fit">
              <CiSearch size={40} />
            </span>
            <span className="text-lg md:text-xl text-red-500 py-4">SEO</span>
            <p className="text-neutral-500 font-thin lg:p-4 text-center">
              As an SEO expert, I optimize web content to shine online,
              orchestrating traffic surges and boosting search engine rankings
              for audience enchantment.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="bg-neutral-100 p-4 md:p-8 rounded-full -z-50 block w-fit">
              <MdOutlineCode size={40} />
            </span>
            <span className="text-lg md:text-xl text-red-500 py-4">
              Web Development
            </span>
            <p className="text-neutral-500 font-thin lg:p-4 text-center">
              As a Full Stack Developer, I seamlessly blend front-end and
              back-end technologies to craft robust, scalable web solutions for
              diverse client needs.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="bg-neutral-100 p-4 md:p-8 rounded-full -z-50 block w-fit">
              <MdDesignServices size={40} />
            </span>
            <span className="text-lg md:text-xl text-red-500 py-4">
              UX/UI Design
            </span>
            <p className="text-neutral-500 font-thin lg:p-4 text-center">
              As a UX/UI designer, I create captivating interfaces for
              exceptional user experiences, aligning seamlessly with clients'
              brand visions.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="bg-neutral-100 p-4 md:p-8 rounded-full -z-50 block w-fit">
              <MdMonitor size={40} />
            </span>
            <span className="text-lg md:text-xl text-red-500 py-4">
              Web Designing
            </span>
            <p className="text-neutral-500 font-thin lg:p-4 text-center">
              As a web designer, I fuse creativity and technical expertise to
              craft captivating, responsive websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
