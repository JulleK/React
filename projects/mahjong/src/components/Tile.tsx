interface tileProps {
  symbol: string;
  theme?: "Regular" | "Black";
}

const Tile: React.FC<tileProps> = ({ symbol, theme = "Regular" }) => {
  return (
    <div className="tile">
      <img
        className="tile-part tile-part-back"
        src={`/src/riichi-mahjong-tiles/${theme}/Back.svg`}
        alt="error displaying element"
      />
      <img
        className="tile-part"
        src={`/src/riichi-mahjong-tiles/${theme}/Front.svg`}
        alt="error displaying element"
      />
      <img
        className="tile-part"
        src={`/src/riichi-mahjong-tiles/${theme}/${symbol}.svg`}
        alt="error displaying element"
      />
    </div>
  );
};

export default Tile;
