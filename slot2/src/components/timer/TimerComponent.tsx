export default function TimerComponet() {
  return (
    <div className="relative h-72">
      <img
        className="h-full w-screen filter brightness-50 object-cover"
        src="https://preview.colorlib.com/theme/evento/assets/img/bg/bg-img.png.webp"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <p className="text-white text-center font-bold text-xl">
            Counter until the big event
          </p>
        </div>
        <div className="mt-5 flex items-center justify-center flex-wrap gap-10">
          <div className="flex flex-col items-center justify-center bg-red-500 p-3">
            <p className="font-bold text-white text-5xl">00</p>
            <p className="text-white">Weeks</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-red-500 p-3">
            <p className="font-bold text-white text-5xl">00</p>
            <p className="text-white">Days</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-red-500 p-3">
            <p className="font-bold text-white text-5xl">00</p>
            <p className="text-white">Hours</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-red-500 p-3">
            <p className="font-bold text-white text-5xl">00</p>
            <p className="text-white">Minutes</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-red-500 p-3">
            <p className="font-bold text-white text-5xl">00</p>
            <p className="text-white">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
