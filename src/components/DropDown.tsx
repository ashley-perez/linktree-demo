import { useState } from "react";
import type { Mode } from "./CardData";
import { Modes } from "./CardData";

type DropDownProps = {
  setMode: (mode: Mode) => void;
};

export default function DropDown({ setMode }: DropDownProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <menu className="relative flex flex-col font-bc-prop text-xs">
      <button
        // set the state when button is clicked
        onClick={() => {
          setOpen(!isOpen);
          console.log("isopen var: ", isOpen);
        }}
        className={
          " cursor-pointer p-2 bg-win95-gray hover:bg-win95-dark-gray shadow-win95"
        }
      >
        profile
      </button>
      {isOpen && (
        <div className=" absolute right-0 mt-8">
          {" "}
          {Modes.map((selectedMode, index) => (
            <button
              key={index}
              onClick={() => {
                setMode(selectedMode);
                setOpen(!isOpen);

                // update URL HERE!!!
                // only want to update URL when user changes the mode
                const currURL = new URLSearchParams(window.location.search);
                currURL.set("mode", selectedMode); // get mode= currMode ready to add to URL
                window.history.pushState({}, "", `?${currURL.toString()}`); // write and update to URL
              }}
              className="cursor-pointer p-2 w-full text-[10px] md:text-xs bg-win95-gray hover:bg-win95-dark-blue hover:text-win95-off-white shadow-win95"
            >
              {selectedMode}
            </button>
          ))}
        </div>
      )}
    </menu>
  );
}
