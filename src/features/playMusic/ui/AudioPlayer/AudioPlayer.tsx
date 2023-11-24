import Controls from "../Controls/Controls";
import ProgressBar from "@/shared/ui/ProgressBar";
import SongInfo from "@/shared/ui/SongInfo";

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
