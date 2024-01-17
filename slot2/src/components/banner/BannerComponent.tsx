import { useEffect, useState } from "react";
import ContentComponent from "../contentBanner/ContentComponent.tsx";
export default function BannerComponent() {
  const [item, setItem] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setItem((prevItem) => {
        if (prevItem === 3) {
          return 1;
        } else {
          return prevItem + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      <img
        className="h-screen w-screen"
        src="https://preview.colorlib.com/theme/evento/assets/img/bg/slider.png.webp"
        alt=""
      />

      <ContentComponent item={item} />

      {/* pagination */}
      <div className="absolute bottom-0 bg-white left-1/2 transform -translate-x-1/2 pt-5 px-32 pb-3 rounded-tr-full rounded-tl-full">
        <div className="flex gap-10">
          <span
            onClick={() => setItem(1)}
            className={`font-semibold text-lg p-2 px-2 cursor-pointer  ${
              item === 1 ? "border border-solid border-red-600  rounded-xl" : ""
            }`}
          >
            1
          </span>
          <span
            onClick={() => setItem(2)}
            className={`font-semibold text-lg p-2 px-2 cursor-pointer ${
              item === 2 ? "border border-solid border-red-600  rounded-xl" : ""
            }`}
          >
            2
          </span>
          <span
            onClick={() => setItem(3)}
            className={`font-semibold text-lg p-2 px-2 cursor-pointer ${
              item === 3 ? "border border-solid border-red-600  rounded-xl" : ""
            }`}
          >
            3
          </span>
        </div>
      </div>
    </div>
  );
}
