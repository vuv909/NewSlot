import AboutChild from "./child/AboutChild";

export default function AboutComponent() {
  return (
    <div className="mt-10 px-20">
      <h1 className="uppercase  font-bold text-3xl relative before:content-[''] before:absolute before:w-6 before:h-1 before:bg-red-500 before:-top-2 before:left-0">
        About the event
      </h1>
      <div className="mt-10 flex items-center justify-center flex-wrap">
        <div className="basis-1/2" >
          <p className="text-start text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer
            iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
            accumsan. Pellentesque convallis consectetur tortor id placerat.
            Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
            volutpat ligula euismod.
          </p>
        </div>
        <div className="basis-1/2">
          <p className="text-start text-gray-500">
            In rhoncus massa nec sollicitudin. Ut hendrerit hendrerit nisl a
            accumsan. Pellentesque convallis consectetur tortor id placerat.
            Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
            volutpat ligula euismod quis. Maecenas ornare, ex in malesuada
            tempus.
          </p>
        </div>
      </div>

      <AboutChild />

    </div>
  );
}
