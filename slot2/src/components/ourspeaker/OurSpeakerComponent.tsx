import { useState } from "react";

export default function OurSpeakerComponent() {
  const [itemHover, setIsHover] = useState(0);

  return (
    <div>
      <div className="px-20">
        <h1 className="mt-36 mb-16 uppercase  font-bold text-3xl relative before:content-[''] before:absolute before:w-6 before:h-1 before:bg-red-500 before:-top-2 before:left-0">
          Our speakers
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <div
          className="relative basis-1/4 overflow-hidden"
          onMouseOver={() => setIsHover(1)}
          onMouseOut={() => setIsHover(0)}
        >
          <img
            className={`w-full transition duration-500 ease-in-out ${itemHover === 1 ? 'scale-125':''}`}
            src="https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp"
            alt=""
          />
          <div className={`absolute bottom-2 w-1/2 p-1 ${itemHover === 1 ? 'bg-red-500' : 'bg-black'} bg-opacity-90`}>
            <h1 className={`ml-2 ${itemHover === 1 ? 'text-white' : 'text-red-600'} text-xl font-bold`}>
              Patricia Stone
            </h1>
            <p className="ml-2 text-white">CEO Company</p>
          </div>
        </div>

        <div
          className="relative basis-1/4 overflow-hidden"
          onMouseOver={() => setIsHover(2)}
          onMouseOut={() => setIsHover(0)}
        >
          <img
            className={`w-full transition duration-500 ease-in-out ${itemHover === 2 ? 'scale-125':''}`}
            src="https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp"
            alt=""
          />
          <div className={`absolute bottom-2 w-1/2 p-1 ${itemHover === 2 ? 'bg-red-500' : 'bg-black'} bg-opacity-90`}>
            <h1 className={`ml-2 ${itemHover === 2 ? 'text-white' : 'text-red-600'} text-xl font-bold`}>
              Patricia Stone
            </h1>
            <p className="ml-2 text-white">CEO Company</p>
          </div>
        </div>

        <div
          className="relative basis-1/4 overflow-hidden"
          onMouseOver={() => setIsHover(3)}
          onMouseOut={() => setIsHover(0)}
        >
          <img
            className={`w-full transition duration-500 ease-in-out ${itemHover === 3 ? 'scale-125':''}`}
            src="https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp"
            alt=""
          />
          <div className={`absolute bottom-2 w-1/2 p-1 ${itemHover === 3 ? 'bg-red-500' : 'bg-black'} bg-opacity-90`}>
            <h1 className={`ml-2 ${itemHover === 3 ? 'text-white' : 'text-red-600'} text-xl font-bold`}>
              Patricia Stone
            </h1>
            <p className="ml-2 text-white">CEO Company</p>
          </div>
        </div>


        <div
          className="relative basis-1/4 overflow-hidden"
          onMouseOver={() => setIsHover(4)}
          onMouseOut={() => setIsHover(0)}
        >
          <img
            className={`w-full transition duration-500 ease-in-out ${itemHover === 4 ? 'scale-125':''}`}
            src="https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp"
            alt=""
          />
          <div className={`absolute bottom-2 w-1/2 p-1 ${itemHover === 4 ? 'bg-red-500' : 'bg-black'} bg-opacity-90`}>
            <h1 className={`ml-2 ${itemHover === 4 ? 'text-white' : 'text-red-600'} text-xl font-bold`}>
              Patricia Stone
            </h1>
            <p className="ml-2 text-white">CEO Company</p>
          </div>
        </div>

        <div
          className="relative basis-1/4 overflow-hidden"
          onMouseOver={() => setIsHover(5)}
          onMouseOut={() => setIsHover(0)}
        >
          <img
            className={`w-full transition duration-500 ease-in-out ${itemHover === 5 ? 'scale-125':''}`}
            src="https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp"
            alt=""
          />
          <div className={`absolute bottom-2 w-1/2 p-1 ${itemHover === 5 ? 'bg-red-500' : 'bg-black'} bg-opacity-90`}>
            <h1 className={`ml-2 ${itemHover === 5 ? 'text-white' : 'text-red-600'} text-xl font-bold`}>
              Patricia Stone
            </h1>
            <p className="ml-2 text-white">CEO Company</p>
          </div>
        </div>
        
        <div
          className="relative basis-1/4 overflow-hidden"
          onMouseOver={() => setIsHover(6)}
          onMouseOut={() => setIsHover(0)}
        >
          <img
            className={`w-full transition duration-500 ease-in-out ${itemHover === 6 ? 'scale-125':''}`}
            src="https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp"
            alt=""
          />
          <div className={`absolute bottom-2 w-1/2 p-1 ${itemHover === 6 ? 'bg-red-500' : 'bg-black'} bg-opacity-90`}>
            <h1 className={`ml-2 ${itemHover === 6 ? 'text-white' : 'text-red-600'} text-xl font-bold`}>
              Patricia Stone
            </h1>
            <p className="ml-2 text-white">CEO Company</p>
          </div>
        </div>

        <div
          className="relative basis-1/4 overflow-hidden"
          onMouseOver={() => setIsHover(7)}
          onMouseOut={() => setIsHover(0)}
        >
          <img
            className={`w-full transition duration-500 ease-in-out ${itemHover === 7 ? 'scale-125':''}`}
            src="https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp"
            alt=""
          />
          <div className={`absolute bottom-2 w-1/2 p-1 ${itemHover === 7 ? 'bg-red-500' : 'bg-black'} bg-opacity-90`}>
            <h1 className={`ml-2 ${itemHover === 7 ? 'text-white' : 'text-red-600'} text-xl font-bold`}>
              Patricia Stone
            </h1>
            <p className="ml-2 text-white">CEO Company</p>
          </div>
        </div>

        <div
          className="relative basis-1/4 overflow-hidden"
          onMouseOver={() => setIsHover(8)}
          onMouseOut={() => setIsHover(0)}
        >
          <img
            className={`w-full transition duration-500 ease-in-out ${itemHover === 8 ? 'scale-125':''}`}
            src="https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp"
            alt=""
          />
          <div className={`absolute bottom-2 w-1/2 p-1 ${itemHover === 8 ? 'bg-red-500' : 'bg-black'} bg-opacity-90`}>
            <h1 className={`ml-2 ${itemHover === 8 ? 'text-white' : 'text-red-600'} text-xl font-bold`}>
              Patricia Stone
            </h1>
            <p className="ml-2 text-white">CEO Company</p>
          </div>
        </div>
 

      </div>
    </div>
  );
}
