import Profile from "./components/Profile";
import LinkCards from "./components/LinkCards";
import type { Mode } from "./components/CardData";
import { Modes} from "./components/CardData";
import { dynamicCards } from "./components/CardData";
import DropDown from "./components/DropDown";

import { useState, useEffect } from "react";
// import { useSearchParams } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState<Mode>("professional");


   // WRITE to URL and update based on mode
	 useEffect(() => {
     const currURL = new URLSearchParams(window.location.search); 
		 currURL.set('mode', mode); // get mode= currMode ready to add to URL
		 window.history.pushState({}, '', `?${currURL.toString()}`); // write and update to URL

   }, [mode]); // run everytime the mode value changes (mode from usestate)

	// READ URL on page load and set mode (if applicable)
	 useEffect(() => {
     const currURL = window.location.search;
		 const searchParam = new URLSearchParams(currURL);

		 // if searchParam exists and mode is in valid list of modes
		 if (searchParam && Modes.includes(searchParam.get('mode'))) {
				setMode(searchParam.get('mode') as Mode); // typecast with as
     }
  }, []); // empty array - runs only once after initial mount (render)

  return (
    // relative parent for the dropdown
    <main className="relative flex flex-col items-center pt-10">
      <div className="absolute top-10 right-[10%] md:right-[31%]">
        <DropDown setMode={setMode} />
      </div>

      <div className="p-6 justify-center">
        <Profile />
      </div>

      <div className="flex flex-col w-full gap-3 items-center pb-6">
        {/* access value (which is an array) from records obj */}
        {dynamicCards[mode].map((card, index) => (
          <LinkCards key={index} cardinfo={card} />
        ))}
      </div>
    </main>
  );
}

export default App;
