import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";

export default function AudioPlayer() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <SongInfo />

      {/* progress bar */}
      <ProgressBar />

      {/* controls */}
      <div>
        <Controls />
      </div>
    </div>
  );
}
