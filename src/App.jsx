import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import bg from './assets/bg/BG.png';
import heriImg from './assets/heroImg2.png';
import Search from './comps/Search';
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <main className={` `}>
        <img src={bg} className='absolute w-full object-cover' alt='' />
        <div className='pattern' />
        <div className='wrapper'>
          <header>
            <img src={heriImg} className='rounded-4xl' alt='Hero banner' />
            <h1 className='mt-5'>
              Find <span className='text-gradient'> Animation Movies</span> you
              Enjoy
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>
        </div>
      </main>
    </>
  );
}

export default App;
