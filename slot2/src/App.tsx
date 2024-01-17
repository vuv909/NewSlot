import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
import BannerComponent from "./components/banner/BannerComponent";
import InformationComponent from "./components/information/InformationComponent";
import TimerComponet from "./components/timer/TimerComponent";
import AboutComponent from "./components/about/AboutComponent";
import OurSpeakerComponent from "./components/ourspeaker/OurSpeakerComponent";
import PricingTableComponent from "./components/pricingTable/PricingTableComponent";
import CalendarComponent from "./components/calendarComponent/CalendarComponent";
import OurPartnersComponent from "./components/ourpartner/OurPartnerComponent";
import GetYourTicket from "./components/getyourticket/GetYourTicket";
import FooterOne from "./components/footerone/FooterOne";
import FooterLast from "./components/footerlast/FooterLast";

function App() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent />
      <InformationComponent />
      <TimerComponet />
      <AboutComponent />
      <OurSpeakerComponent />
      <PricingTableComponent />
      <CalendarComponent />
      <OurPartnersComponent />
      <GetYourTicket />
      <FooterOne />
      <FooterLast />
    </div>
  );
}

export default App;
