// SCRAPPING????? REMEMBER TO DELETE
import { useState } from "react";

export type TimeCardData = {
  title: string;
  link: string;
  endDate?: Date;
  startDate?: Date;
  description?: string;
};

// javascript date/time string
// YYYY-MM-DDTHH:mm:ss.sssZ
// ex: 2011-10-10T14:48:00  T specifies the time

export const timecards: TimeCardData[] = [
  {
    title: "TIMESKIP - Public Beta",
    endDate: new Date(Date.now() + 30 * 60 * 60 * 1000),
    link: "placeholder",
  },
  {
    title: "TIMESKIP - Alpha Playtest",
    endDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    description: "playtesters needed!",
    link: "placeholder",
  },
  {
    title: "TIMESKIP - ON STEAM NOW",
    startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    description: "here we go again...",
    link: "placeholder",
  },
];

export default function TimeCards({ timecardinfo }: { timecardinfo: TimeCardData }) {
  
  // stuff here
  const currDate = new Date(Date.now());

	const [remainingTime, setTime] = useState<Date>();



  return (
    // whole card needs to be clickable so everything goes in the <a>
    <a
      href={timecardinfo.link}
      target="_blank" // to open in new tab
      rel="noopener noreferrer" // security measure so there is no access to window.opener
      // RELATIVE!!!! on the parent so that absolute has a reference
      // and doesn't "break out" of bounds
      className="relative flex flex-col w-xs md:w-md font-bc-prop bg-win95-gray items-center  shadow-win95 hover:bg-hover-gray cursor-pointer"
    >
      {/* absolute -> doesn't mess with other elements positioning
          only uses the parents as a reference to position itself */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow-win95-circle"></div>

      <div className="pt-2">{timecardinfo.title}</div>
      <div className="text-sm pb-2">COUNTDOWN</div>
    </a>
  );
}
