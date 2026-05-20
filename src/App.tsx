import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Profile from './components/Profile'
import LinkCards from './components/LinkCards'
import { cards } from './components/CardData'
import type { CardData } from './components/CardData'

function App() {
  // stuff here

  return (
   <main className="flex flex-col items-center">
    <div className="p-3 justify-center">
    <Profile />
		</div>

		<div className="flex flex-col gap-3">
		{cards.map((card, index) => (
				// rememeber that LinkCards {cardinfo}
				<LinkCards key={index} cardinfo={card} />
    ))}
		</div>

   </main>
  );
}

export default App
