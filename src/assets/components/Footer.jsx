import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-black px-4 lg:px-[96px]">
      <div>
        <h4 className="py-5 text-xl md:text-4xl font-semibold text-center text-neutral-300">
          K-Folio
        </h4>
      </div>
      <div className="flex md:flex-row flex-col justify-center lg:justify-around space-y-4 md:space-x-16">
        <div>
          <div>
            <h6 className="text-neutral-400 border-b border-dashed w-fit">
              Where to find me
            </h6>
          </div>
          <div>
            <address className="text-white text-lg">
              <Link to="">Andalusia, Seih Al Uraibi, Ras Al-Khaimah, UAE</Link>
            </address>
          </div>
        </div>
        <div className="flex justify-start flex-col items-start">
          <div>
            <h6 className="text-neutral-400 border-b border-dashed w-fit">
              Contact me
            </h6>
          </div>
          <ul>
            <li className="py-1">
              <Link
                to="mailto:kirubel739@gmail.com"
                target="blank"
                className="text-lg text-white"
              >
                kirubel739@gmail.com
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="tel:+971569527221"
                target="blank"
                className="text-lg text-white"
              >
                +971569527221
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="https://t.me/ripsima29"
                target="blank"
                className="text-lg text-white"
              >
                @ripsima29 - Telegram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-10">
        <span className="text-neutral-400">
          Copyright © 2024 - 2024 www.kirubeltekle.com - All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
