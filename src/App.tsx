// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Profile from "./components/Profile";
import LinkCards from "./components/LinkCards";
import { businessCards } from "./components/CardData";
// import TimeCards from "./components/TimeCards";
// import { timecards } from "./components/TimeCards";

import { useState } from "react";

import type { Mode } from "./components/CardData";
import { dynamicCards } from "./components/CardData";
import DropDown from "./components/DropDown";

function App() {
  // stuff here
  const [mode, setMode] = useState<Mode>("business");

  return (
    <main className="flex flex-col items-center">
      <div className="p-6 justify-center">
        <Profile />
				
				<DropDown mode={mode} setMode={setMode} />

      </div>

      <div className="flex flex-col w-full gap-3 items-center pb-6">

			{dynamicCards[mode].map((card, index) => (
				  <LinkCards key={index} cardinfo={card} />
				))}


      </div>

    </main>
  );
}

export default App;
