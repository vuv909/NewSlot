export default function ContentComponent({ item }: { item: number }) {

  if(item === 1)  return ContentOne();

  if(item === 2)  return ContentTwo();

  if(item === 3)  return ContentThree();

 
}

function ContentOne() {
  return (
    <div className="w-screen py-20 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-20 ">
      <p className="uppercase text-white text-4xl">prepare yourself for the</p>
      <p className="uppercase text-7xl text-red-500 font-extrabold">
        conference
      </p>
      <p className="uppercase text-white text-xl">
        12-14 february 2018 - los angeles, ca
      </p>
      <button className="mt-5 uppercase p-2 bg-red-500 hover:bg-red-300 text-white rounded-full px-5">
        buy tickets now
      </button>
    </div>
  );
}

function ContentTwo() {
  return (
    <div className="w-screen py-20 text-start pl-44 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-20 ">
      <p className="uppercase text-white text-4xl">prepare yourself for the</p>
      <p className="uppercase text-7xl text-red-500 font-extrabold">
        conference
      </p>
      <p className="uppercase text-white text-xl">
        12-14 february 2018 - los angeles, ca
      </p>
      <button className="mt-5 uppercase p-2 bg-red-500 hover:bg-red-300 text-white rounded-full px-5">
        buy tickets now
      </button>
    </div>
  );
}

function ContentThree() {
  return (
    <div className="w-screen py-20 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-20 ">
      <p className="uppercase text-white text-4xl">prepare yourself for the</p>
      <p className="uppercase text-7xl text-red-500 font-extrabold">
        conference
      </p>
      <p className="uppercase text-white text-xl">
        12-14 february 2018 - los angeles, ca
      </p>
      <button className="mt-5 uppercase p-2 bg-red-500 hover:bg-red-300 text-white rounded-full px-5">
        buy tickets now
      </button>
    </div>
  );
}
