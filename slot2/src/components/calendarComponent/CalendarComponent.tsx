import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CalendarComponent() {
  return (
    <div className="px-20 mt-24">
      <div className="bg-red-500">
        <span className="text-white text-2xl ml-2">
          <FontAwesomeIcon icon={faCalendar} />
        </span>
        <span className="text-white ml-1 font-bold text-lg">
          Next Events Calendar
        </span>
      </div>
      <div>
        <table className="overflow-x-auto w-full bg-gray-200">
          <tbody>
            <tr>
              <td className="w-1/5">
                <img className="rounded-lg scale-75" src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c1.png.webp" />
              </td>
              <td className="text-center w-1/5">
                <p className="font-bold text-2xl">14</p>
                <p>February</p>
              </td>
              <td className="text-center w-1/5">
                <p className="font-semibold">Conference in Amsterdam</p>
                <p className="font-semibold">08 AM - 04 PM</p>
                <p className="text-gray-400">Speaker: Daniel Hill</p>
              </td>
              <td className="text-center w-1/3">
                <button className="p-2 px-10 text-white bg-red-500 rounded-full uppercase hover:bg-black">
                  read more
                </button>
              </td>
              <td className="w-1/5">
                <p className="underline text-red-500 hover:text-black cursor-pointer">
                  Buy Now
                </p>
              </td>
            </tr>
            <tr>
              <td className="w-1/5">
                <img className="rounded-lg scale-75"  src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c1.png.webp" />
              </td>
              <td className="text-center w-1/5">
                <p className="font-bold text-2xl">14</p>
                <p>February</p>
              </td>
              <td className="text-center w-1/5">
                <p className="font-semibold">Conference in Amsterdam</p>
                <p className="font-semibold">08 AM - 04 PM</p>
                <p className="text-gray-400">Speaker: Daniel Hill</p>
              </td>
              <td className="text-center w-1/3">
                <button className="p-2 px-10 text-white bg-red-500 rounded-full uppercase hover:bg-black">
                  read more
                </button>
              </td>
              <td className="w-1/5">
                <p className="underline text-red-500 hover:text-black cursor-pointer">
                  Buy Now
                </p>
              </td>
            </tr>
            <tr>
              <td className="w-1/5">
                <img className="rounded-lg scale-75" src="https://preview.colorlib.com/theme/evento/assets/img/cleander/c1.png.webp" />
              </td>
              <td className="text-center w-1/5">
                <p className="font-bold text-2xl">14</p>
                <p>February</p>
              </td>
              <td className="text-center w-1/5">
                <p className="font-semibold">Conference in Amsterdam</p>
                <p className="font-semibold">08 AM - 04 PM</p>
                <p className="text-gray-400">Speaker: Daniel Hill</p>
              </td>
              <td className="text-center w-1/3">
                <button className="p-2 px-10 text-white bg-red-500 rounded-full uppercase hover:bg-black">
                  read more
                </button>
              </td>
              <td className="w-1/5">
                <p className="underline text-red-500 hover:text-black cursor-pointer">
                  Buy Now
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
