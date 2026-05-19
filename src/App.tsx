import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Profile from './components/Profile'
import LinkCards from './components/LinkCards'

function App() {
  // stuff here

  return (
   <main className="flex flex-col px-4 w-full max-w-md mx-auto items-center">
    <Profile />
    <LinkCards />
   </main>
  );
}

export default App
