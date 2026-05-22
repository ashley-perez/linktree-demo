import { useState } from "react";
import type { Mode } from "./CardData";
import { Modes } from "./CardData";

type DropDownProps = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

export default function DropDown({ mode, setMode }: DropDownProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <menu className="flex flex-col font-bc-prop">
      <button
        // set the state when button is clicked
        onClick={() => {
          setOpen(!isOpen);
          console.log("isopen var: ", isOpen);
        }}
        className={"py-2 px-4 border-2 bg-win95-gray shadow-win95"}
      >
        {mode}
      </button>
      {isOpen &&
        Modes.map((selectedMode, index) => (
          <button
					  key={index}
            onClick={() => setMode(selectedMode)}
            className="bg-win95-gray hover:bg-win95-dark-blue hover:text-win95-off-white shadow-win95"
          >
            {selectedMode}
          </button>
        ))}
    </menu>
  );
}
