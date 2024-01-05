import { CiDesktopMouse1 } from "react-icons/ci";
import bg from "../imgs/hero.jpg";

function Hero() {
  return (
    <div
      className="relative h-screen bg-center bg-cover bg-neutral-700 bg-blend-overlay "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="absolute text-neutral-50 text-center w-full "
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="py-1">
          <span className="md:text-4xl text-3xl">Welcome</span>
        </div>
        <div className="py-1">
          <p className="text-5xl md:text-7xl tracking-wider">
            I am <span className="text-red-500">Kirubel</span> Tekle
          </p>
        </div>
        <div className="py-2 mt-4 flex justify-center">
          <p className="text-md md:text-2xl text-white tracking-wide py-3 md:py-5 rounded-lg md:rounded-full px-4 backdrop-blur-sm font-semibold bg-red-200 bg-opacity-30 w-fit">
            UX/UI designer and Full Stack Web developer
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-10">
        <CiDesktopMouse1 size={30} className="text-white animate-bounce" />
      </div>
    </div>
  );
}

export default Hero;
