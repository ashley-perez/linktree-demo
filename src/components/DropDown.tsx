import { useState } from "react";
import { Modes, type Mode } from "./CardData";

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
        }}
        className={
          "cursor-pointer md:text-sm p-2 min-h-8.75 bg-win95-gray  hover:bg-win95-dark-gray active:bg-win95-dark-gray shadow-win95"
        }
      >
        Profile
      </button>
      {isOpen && (
        <div className=" absolute right-0 mt-8 md:mt-9">
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
              className="cursor-pointer p-2  min-h-8.75  w-full text-xs bg-win95-gray hover:bg-win95-dark-blue active:bg-win95-dark-blue hover:text-win95-off-white shadow-win95"
            >
              {selectedMode}
            </button>
          ))}
        </div>
      )}
    </menu>
  );
}
