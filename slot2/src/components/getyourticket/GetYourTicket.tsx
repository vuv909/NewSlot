export default function GetYourTicket() {
  return (
    <div className="w-screen h-96 mt-20 relative">
      <img
        src="https://preview.colorlib.com/theme/evento/assets/img/bg/tickets.png"
        alt=""
        className="w-screen h-full object-cover"
      />
      
       <div className="absolute top-1/2 -translate-y-1/2">
       <div className="px-20  flex justify-between items-end">
          <div className="basis-1/2">
            <h1 className="uppercase text-white mb-5 font-bold text-3xl relative before:content-[''] before:absolute before:w-6 before:h-1 before:bg-red-500 before:-top-2 before:left-0">
              get your tikets
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus massa nec gravida tempus. Integer iaculis in
              aazzzCurabitur a pulvinar nunc. Maecenas laoreet finibus lectus,
              at volutpat ligula euismod.
            </p>
          </div>
          <div className="basis-1/4">
            <button className="bg-red-500 w-36 py-2 rounded-full text-white hover:bg-black font-bold text-lg">
              Buy now
            </button>
          </div>
        </div>
       </div>
    </div>
  );
}
