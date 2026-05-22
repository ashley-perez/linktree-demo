import Profile from "./components/Profile";
import LinkCards from "./components/LinkCards";
import type { Mode } from "./components/CardData";
import { dynamicCards } from "./components/CardData";
import DropDown from "./components/DropDown";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState<Mode>("professional");

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
