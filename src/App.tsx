// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Profile from "./components/Profile";
import LinkCards from "./components/LinkCards";
import { cards } from "./components/CardData";

function App() {
  // stuff here

  return (
    <main className="flex flex-col items-center">
      <div className="p-6 justify-center">
        <Profile />
      </div>

      <div className="flex flex-col w-full gap-3 items-center pb-6">
        {cards.map((card, index) => (
          // rememeber that LinkCards uses {cardinfo}
          <LinkCards key={index} cardinfo={card} />
        ))}
      </div>
    </main>
  );
}

export default App;
