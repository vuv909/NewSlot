import {
  faLocationDot,
  faTicket,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InformationComponent() {
  return (
    <div className="pt-48 pb-24 flex items-center justify-center flex-wrap gap-20">
      <div className="flex items-center justify-center gap-5 ">
        <div className="text-red-500 text-4xl">
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div>
          <div className="font-semibold text-xl">LOCATION</div>
          <div className="text-gray-500">Los Angeles, CA.</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="text-red-500 text-4xl">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div>
          <div className="font-semibold text-xl">SPEAKERS</div>
          <div className="text-gray-500">Natalie James + guests</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="text-red-500 text-4xl">
          <FontAwesomeIcon icon={faUserTie} />
        </div>
        <div>
          <div className="font-semibold text-xl">TIKETS</div>
          <div className="text-gray-500">$65 early bird</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="text-red-500 text-4xl">
          <FontAwesomeIcon icon={faTicket} />
        </div>
        <div>
          <div className="font-semibold text-xl">DATE</div>
          <div className="text-gray-500">12-14 february 2018</div>
        </div>
      </div>
    </div>
  );
}
