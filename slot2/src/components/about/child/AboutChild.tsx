import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function AboutChild() {
  const [isHovered, setIsHovered] = useState(0);

  return (
    <div className="mt-10 flex items-center justify-center gap-5">
      <div className={`overflow-hidden px-5 pb-2  h-64 w-80 ${isHovered === 1 ? 'bg-red-500 text-white' : 'bg-gray-200'}`} 
         onMouseOver={()=>setIsHovered(1)}
         onMouseOut={()=>setIsHovered(0)}
      >
        <div className={` -mt-2 text-5xl ${isHovered === 1 ? 'text-white': 'text-red-500'}`}>
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
        <div>
          <h1 className="font-bold  text-2xl mt-5 mb-5">9 Speakers</h1>
        </div>
        <div>
          <p className={`text-lg ${isHovered === 1 ? 'text-white' : 'text-gray-500'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            massa nec graviante.
          </p>
        </div>
        <div>
          <p className={`text-lg ${isHovered === 1 ? 'text-white' : 'text-red-500'} mt-5 cursor-pointer`}>Read More</p>
        </div>
      </div>

      <div className={`overflow-hidden px-5 pb-2  h-64 w-80 ${isHovered === 2 ? 'bg-red-500 text-white' : 'bg-gray-200'}`} 
         onMouseOver={()=>setIsHovered(2)}
         onMouseOut={()=>setIsHovered(0)}
      >
        <div className={` -mt-2 text-5xl ${isHovered === 2 ? 'text-white': 'text-red-500'}`}>
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
        <div>
          <h1 className="font-bold  text-2xl mt-5 mb-5">9 Speakers</h1>
        </div>
        <div>
          <p className={`text-lg ${isHovered === 2 ? 'text-white' : 'text-gray-500'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            massa nec graviante.
          </p>
        </div>
        <div>
          <p className={`text-lg ${isHovered === 2? 'text-white' : 'text-red-500'} mt-5 cursor-pointer`}>Read More</p>
        </div>
      </div>

      <div className={`overflow-hidden px-5 pb-2  h-64 w-80 ${isHovered === 3 ? 'bg-red-500 text-white' : 'bg-gray-200'}`} 
         onMouseOver={()=>setIsHovered(3)}
         onMouseOut={()=>setIsHovered(0)}
      >
        <div className={` -mt-2 text-5xl ${isHovered === 3 ? 'text-white': 'text-red-500'}`}>
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
        <div>
          <h1 className="font-bold  text-2xl mt-5 mb-5">9 Speakers</h1>
        </div>
        <div>
          <p className={`text-lg ${isHovered === 3 ? 'text-white' : 'text-gray-500'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            massa nec graviante.
          </p>
        </div>
        <div>
          <p className={`text-lg ${isHovered === 3? 'text-white' : 'text-red-500'} mt-5 cursor-pointer`}>Read More</p>
        </div>
      </div>

      <div className={`overflow-hidden px-5 pb-2  h-64 w-80 ${isHovered === 4 ? 'bg-red-500 text-white' : 'bg-gray-200'}`} 
         onMouseOver={()=>setIsHovered(4)}
         onMouseOut={()=>setIsHovered(0)}
      >
        <div className={` -mt-2 text-5xl ${isHovered === 4 ? 'text-white': 'text-red-500'}`}>
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
        <div>
          <h1 className="font-bold  text-2xl mt-5 mb-5">9 Speakers</h1>
        </div>
        <div>
          <p className={`text-lg ${isHovered === 4 ? 'text-white' : 'text-gray-500'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            massa nec graviante.
          </p>
        </div>
        <div>
          <p className={`text-lg ${isHovered === 4? 'text-white' : 'text-red-500'} mt-5 cursor-pointer`}>Read More</p>
        </div>
      </div>
      
    </div>
  );
}
