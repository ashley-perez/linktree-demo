import type { CardData } from "./CardData";

function LinkCards( {cardinfo} : {cardinfo: CardData} ) {
  return (
    <div className="flex flex-col font-akt bg-red-500 items-center border-2 shadow-retro rounded-sm hover:bg-red-600 cursor-pointer">
      <div className="flex flex-row p-2 pb-0 gap-2">
        <p> icon </p>
        <p> {cardinfo.title} </p>
      </div>
        <p className="text-center text-sm text-gray-600"> description </p>
    </div>
  );
}

export default LinkCards;
