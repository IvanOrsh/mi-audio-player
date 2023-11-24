import Controls from "../Controls/Controls";
import ProgressBar from "@/shared/ui/ProgressBar";
import SongInfo from "@/shared/ui/SongInfo";
import { playlist } from "@/assets/playlist/playlist";
import { useAudioPlayer } from "../../model/hooks/useAudioPlayer";

export default function AudioPlayer() {
  const {
    playerState: { playbackState, repeat, shuffle },
    togglePlayPause,
    playPreviousTrack,
    playNextTrack,
    toggleRepeat,
    toggleShuffle,
  } = useAudioPlayer(playlist);

  return (
    <div className="flex flex-col items-center gap-y-4">
      <SongInfo />

      {/* progress bar */}
      <ProgressBar />

      {/* controls */}
      <div>
        <Controls
          repeat={repeat}
          shuffle={shuffle}
          onPlay={togglePlayPause}
          onNext={playNextTrack}
          onPrev={playPreviousTrack}
          onRepeat={toggleRepeat}
          onShuffle={toggleShuffle}
          isPlaying={playbackState === "PLAYING"}
        />
      </div>
    </div>
  );
}
