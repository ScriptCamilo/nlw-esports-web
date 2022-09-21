import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import './styles/main.css';
import { useKeenSlider } from 'keen-slider/react';

import logoImg from './assets/logo.svg'

import { GameCard, CreateAdBanner, CreateAdModal } from './components';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 6,
        spacing: 15,
      },
    },
  )

  useEffect(() => {
    const getGames = async () => {
      const response = await axios('http://localhost:3333/games');
      setGames(response.data);
      setIsLoading(false);
    }

    getGames();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      {isLoading ? <></> : (
        <div ref={sliderRef} className="mt-6 keen-slider">
          {games.map(game => (
            <GameCard key={game.id} title={game.title} bannerUrl={game.bannerUrl} adsCount={game._count.ads} />
          ))}
        </div>
      )}

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />

      </Dialog.Root>
    </div>
  )
}

export default App;
