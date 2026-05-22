import Profile from "./components/Profile";
import LinkCards from "./components/LinkCards";
import type { Mode } from "./components/CardData";
import { dynamicCards } from "./components/CardData";
import DropDown from "./components/DropDown";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState<Mode>("professional");

  return (
    <main className="flex flex-col items-center">
      <div className="p-6 justify-center">
        <Profile />

        {/* need to move elsewhere i think */}
        <DropDown mode={mode} setMode={setMode} />
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
