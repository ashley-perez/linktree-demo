// import { useState, useEffect } from "react";

export type TimeCardData = {
  title: string;
  link: string;
  endDate: string;
  startDate?: string;
  description?: string;
};

// javascript date/time string
// YYYY-MM-DDTHH:mm:ss.sssZ
// ex: 2011-10-10T14:48:00  T specifies the time

export const timecards: TimeCardData[] = [
  {
    title: "TIMESKIP - Public Beta",
    endDate: "2026-05-28T21:00:00",
    link: "placeholder",
  },
  {
    title: "TIMESKIP - Alpha Playtest",
    endDate: "2026-03-07T21:00:00",
    description: "playtesters needed!",
    link: "placeholder",
  },
  {
    title: "TIMESKIP - ON STEAM NOW",
    endDate: "2026-05-30T02:00:00",
    description: "here we go again...",
    link: "placeholder",
  },
];

export default function TimeCards({ timecardinfo }: { timecardinfo: TimeCardData }) {
  // stuff here
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

      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-10 h-5 bg-yellow-500 border-black">
        COUNT
      </div>

      <div className="pt-2">{timecardinfo.title}</div>
      {timecardinfo.description && (
        <div className="text-xs pb-2">{timecardinfo.description}</div>
      )}
    </a>
  );
}
