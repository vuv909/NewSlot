import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterOne() {
  return (
    <div className="bg-slate-900 px-20 flex  p-32">
      <div className="basis-1/3 flex flex-col gap-5">
        <div>
          <img
            src="https://preview.colorlib.com/theme/evento/assets/img/logo.png.webp"
            alt=""
          />
        </div>
        <div>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            massa nec gravida tempus. Integer iaculis in aazzzCurabitur a
            pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula
            euismod.
          </p>
        </div>
        <div className="flex gap-2">
          <FontAwesomeIcon
            icon={faRocket}
            className="hover:text-white hover:bg-red-600 cursor-pointer text-red-600 p-2 rounded-full border border-solid border-red-500"
          />
          <FontAwesomeIcon
            icon={faRocket}
            className="hover:text-white hover:bg-red-600 cursor-pointer text-red-600 p-2 rounded-full border border-solid border-red-500"
          />
          <FontAwesomeIcon
            icon={faRocket}
            className="hover:text-white hover:bg-red-600 cursor-pointer text-red-600 p-2 rounded-full border border-solid border-red-500"
          />
          <FontAwesomeIcon
            icon={faRocket}
            className="hover:text-white hover:bg-red-600 cursor-pointer text-red-600 p-2 rounded-full border border-solid border-red-500"
          />

          <FontAwesomeIcon
            icon={faRocket}
            className="hover:text-white hover:bg-red-600 cursor-pointer text-red-600 p-2 rounded-full border border-solid border-red-500"
          />
        </div>
      </div>

      <div className="basis-1/3 flex flex-col justify-center">
        <h1 className="uppercase text-white mb-5 font-bold text-3xl relative before:content-[''] before:absolute before:w-6 before:h-1 before:bg-red-500 before:-top-2 before:left-0">
          instagram
        </h1>
        <div className="flex gap-5 flex-wrap">
          <div>
            <img
              src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c3.png.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c3.png.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c3.png.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c3.png.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c3.png.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c3.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="basis-1/4 flex flex-col gap-5">
        <h1 className="uppercase text-white mb-5 font-bold text-xl relative before:content-[''] before:absolute before:w-6 before:h-1 before:bg-red-500 before:-top-2 before:left-0">
          SUBSCRIBE TO OUR NEWSLETTER
        </h1>
        <input
          type="text"
          placeholder="E-Mail here"
          className="w-full placeholder:italic py-2 pr-10 bg-slate-800 placeholder:bg-slate-800 outline-none placeholder:border "
        />
        <div>
          <button className="w-full text-white bg-red-500 py-2 px-5 rounded-full hover:bg-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
