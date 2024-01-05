import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [defaultLink, setDefaultLink] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const { hash } = useLocation();
  const [activeLinks, setActiveLinks] = useState({
    home: null,
    about: null,
    contact: null,
    service: null,
  });

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleScroll = (id) => {
    setDefaultLink(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentY = window.scrollY;
      if (currentY !== 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
    switch (hash) {
      case "":
        setActiveLinks({
          home: true,
          about: null,
          contact: null,
          service: null,
        });
        break;
      case "#service":
        setActiveLinks({
          home: null,
          about: null,
          contact: null,
          service: true,
        });
        break;
      case "#contact":
        setActiveLinks({
          home: null,
          about: null,
          contact: true,
          service: null,
        });
        break;
      case "#about":
        setActiveLinks({
          home: null,
          about: true,
          contact: null,
          service: null,
        });
        break;
      default:
        setActiveLinks({
          home: true,
          about: null,
          contact: null,
          service: null,
        });
        break;
    }

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [window.scrollY, hash]);
  return (
    <header className=" fixed z-50 w-full">
      <div
        className={`flex justify-between items-center z-50 px-4 lg:px-24 py-6 ${
          scrolling ? "bg-opacity-100" : "bg-opacity-65"
        }  bg-neutral-600 text-neutral-300`}
      >
        <div>
          <Link
            to="/"
            className="text-neutral-50"
            onClick={() => handleScroll("home")}
          >
            <span className="text-2xl">K-Folio</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-8 lg:space-x-8 items-center text-lg">
            <li>
              <Link
                to="/"
                className={`hover:border-b ${
                  defaultLink || activeLinks.home ? "text-white border-b" : ""
                } focus:text-white focus:border-b  hover:text-neutral-50 transition-all duration-100 ease-in`}
                onClick={() => handleScroll("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                className={`hover:border-b ${
                  activeLinks.about ? "text-white border-b" : ""
                }  focus:text-white focus:border-b   hover:text-neutral-50 transition-all duration-100 ease-in`}
                onClick={() => handleScroll("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#service"
                className={`hover:border-b ${
                  activeLinks.service ? "text-white border-b" : ""
                } focus:text-white focus:border-b  hover:text-neutral-50 transition-all duration-100 ease-in`}
                onClick={() => handleScroll("service")}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className={`hover:border-b ${
                  activeLinks.contact ? "text-white border-b" : ""
                } focus:text-white focus:border-b  hover:text-neutral-50 transition-all duration-100 ease-in`}
                onClick={() => handleScroll("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4 items-center">
            <li className="cursor-pointer">
              <Link to="https://github.com/kirubel1422/" target="blank">
                <FaGithub size={20} />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="https://t.me/ripsima29" target="blank">
                <FaTelegram size={20} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden">
          {toggle ? (
            <MdClose
              size={24}
              className="cursor-pointer"
              onClick={handleToggle}
            />
          ) : (
            <RxHamburgerMenu
              size={24}
              className="cursor-pointer"
              onClick={handleToggle}
            />
          )}
        </div>
      </div>
      {toggle && (
        <div className="relative z-50">
          <div className="absolute w-full bg-neutral-600 !bg-opacity-70 my-8 -top-8 text-lg">
            <ul>
              <li className="py-4 px-6 ">
                <Link
                  to="/"
                  onClick={() => handleScroll("home")}
                  className={` text-neutral-100 ${
                    activeLinks.home ? "text-white border-b" : ""
                  }  focus:text-white focus:border-b  hover:underline ease hover:text-neutral-50  transition-all duration-300 ease ${
                    defaultLink ? "text-white border-b" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="py-4 px-6">
                <Link
                  onClick={() => handleScroll("about")}
                  to="#about"
                  className={`text-neutral-100 ${
                    activeLinks.about ? "text-white border-b" : ""
                  } focus:text-white focus:border-b  hover:text-neutral-50 hover:underline transition-all duration-300 ease`}
                >
                  About
                </Link>
              </li>
              <li className="py-4 px-6">
                <Link
                  to="#service"
                  onClick={() => handleScroll("service")}
                  className={`text-neutral-100  focus:text-white ${
                    activeLinks.service ? "text-white border-b" : ""
                  } focus:border-b  hover:text-neutral-50 hover:underline transition-all duration-300 ease`}
                >
                  Service
                </Link>
              </li>
              <li className="py-4 px-6">
                <Link
                  to="#contact"
                  onClick={() => handleScroll("contact")}
                  className={`text-neutral-100 ${
                    activeLinks.contact ? "text-white border-b" : ""
                  } focus:text-white focus:border-b  hover:text-neutral-50 hover:underline transition-all duration-300 ease`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
