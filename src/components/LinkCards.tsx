import type { CardData } from "./CardData";

function LinkCards({ cardinfo }: { cardinfo: CardData }) {
  // grab icon so we can check if it exists
  const Icon = cardinfo.icon;

  return (
    // whole card needs to be clickable so everything goes in the <a> 
    <a
      href={cardinfo.link}
			target="_blank" // to open in new tab
			rel="noopener noreferrer" // security measure so there is no access to window.opener
      className="flex flex-col w-xs md:w-md font-bc-prop bg-win95-gray items-center  shadow-win95 hover:bg-hover-gray cursor-pointer"
    >
      <div className="flex flex-row p-2 gap-2">

        <div className="flex justify-center">{Icon && <Icon />}</div>
        <p> {cardinfo.title} </p>

      </div>
      <p className="text-center text-sm text-gray-600">
        {" "}
        {cardinfo.description}{" "}
      </p>
    </a>
  );
}

export default LinkCards;
