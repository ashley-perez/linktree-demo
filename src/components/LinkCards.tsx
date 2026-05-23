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
      // RELATIVE!!!! on the parent so that absolute has a reference
      // and doesn't "break out" of bounds
      className="relative flex flex-col w-xs md:w-md font-bc-prop bg-win95-gray items-center  shadow-win95 hover:bg-hover-gray active:bg-hover-gray cursor-pointer"
    >
      {/* only if icon exists do we format it */}
      {Icon && (
        // absolute -> doesn't mess with other elements positioning
        // only uses the parents as a reference to position itself
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Icon size={24} />
        </div>
      )}
      <div className="pt-2">{cardinfo.title}</div>
      {cardinfo.description && (
        <div className="text-xs pb-2">{cardinfo.description}</div>
      )}
    </a>
  );
}

export default LinkCards;
