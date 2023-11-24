import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

export default function AudioPlayer() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1>AudioPlayer</h1>

      {/* progress bar */}
      <ProgressBar />

      {/* controls */}
      <div>
        <Controls />
      </div>
    </div>
  );
}
