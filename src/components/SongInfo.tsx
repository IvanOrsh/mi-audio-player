import coverArt from "../assets/playlist/cover-art/1.jpg";

export default function SongInfo() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <img
        className="drop-shadow-lg rounded-sm"
        width={180}
        height={180}
        src={coverArt}
      />
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl drop-shadow-lg text-primary">Title</span>
        <span className="text-base drop-shadow-lg text-primary">Artist</span>
      </div>
    </div>
  );
}
