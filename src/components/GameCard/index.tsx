interface Props {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

function GameCard(props: Props) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden keen-slider__slide">
      <img src={props.bannerUrl} alt={`${props.title} cover`} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">{props.adsCount} anúncios</span>
      </div>
    </a>
  );
}

export default GameCard;
