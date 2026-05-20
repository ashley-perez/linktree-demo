import type { CardData } from "./CardData";

function LinkCards({ cardinfo }: { cardinfo: CardData }) {
  // grab icon so we can check if it exists
  const Icon = cardinfo.icon;

  return (
    <a href={cardinfo.link} className="flex flex-col w-sm font-akt bg-red-500 items-center border-2 shadow-retro rounded-sm hover:bg-red-600 cursor-pointer">
      <div className="flex flex-row p-2 pb-0 gap-2">
        <div className="justify-center"> 
				 { Icon &&  <Icon /> }
				</div>
        <p> {cardinfo.title} </p>
      </div>
      <p className="text-center text-sm text-gray-600"> {cardinfo.description} </p>
    </a>
  );
}

export default LinkCards;
