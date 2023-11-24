type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

export default function SongInfo(props: SongInfoProps) {
  const { title, artist, coverArtSrc } = props;

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <img
        className="drop-shadow-lg rounded-sm"
        width={180}
        height={180}
        src={coverArtSrc}
      />
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl drop-shadow-lg text-primary">{title}</span>
        <span className="text-base drop-shadow-lg text-primary">{artist}</span>
      </div>
    </div>
  );
}
