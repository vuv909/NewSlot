import Slider from "react-slick";
export default function OurPartnersComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div>
      <div className="px-20 pt-24">
        <h1 className="uppercase font-bold text-3xl relative before:content-[''] before:absolute before:w-6 before:h-1 before:bg-red-500 before:-top-2 before:left-0">
          our partners
        </h1>
      </div>

      <div className="px-20 pt-10 mx-auto">
        <Slider {...settings}>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
          <div className="flex items-center justify-center">
            <img className="scale-75 opacity-65 hover:opacity-100" src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png.webp" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
