import { useEffect, useState } from "react";

export default function NavbarComponent() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${scrolling ? 'fixed top-0 bg-black' : 'fixed top-5 bg-transparent'}`} style={{transition: '0.5s ease-in-out',zIndex:500}}>
      <div className="h-20 w-screen flex items-center justify-around">
        <div>
          <img
            src="https://preview.colorlib.com/theme/evento/assets/img/logo.png.webp"
            alt=""
            className="bg-transparent cursor-pointer"
          />
        </div>
        <div className="flex text-white items-center justify-end gap-10">
          <p className="hover:text-red-500 cursor-pointer ">HOME</p>
          <p className="hover:text-red-500 cursor-pointer">SPEAKERS</p>
          <p className="hover:text-red-500 cursor-pointer">EVENTS</p>
          <p className="hover:text-red-500 cursor-pointer">NEWS</p>
          <p className="hover:text-red-500 cursor-pointer">CONTACT</p>
          <p className="hover:opacity-60 cursor-pointer">
            <img
              src="../../public/searchIcon.png"
              className="w-5 h-5 text-white"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
