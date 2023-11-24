import Controls from "../Controls/Controls";
import ProgressBar from "../ProgressBar/ProgressBar";
import SongInfo from "@/shared/ui/SongInfo";
import { playlist } from "@/assets/playlist/playlist";
import { useAudioPlayer } from "../../model/hooks/useAudioPlayer";

export default function AudioPlayer() {
  const {
    playerState: {
      playbackState,
      repeat,
      shuffle,
      currentTrackDuration,
      currentTrackPlaybackPosition,
    },
    togglePlayPause,
    playPreviousTrack,
    playNextTrack,
    toggleRepeat,
    toggleShuffle,
  } = useAudioPlayer(playlist);

  const computeProgress = (): number => {
    if (!currentTrackDuration || !currentTrackPlaybackPosition) {
      return 0;
    }

    return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      <SongInfo />

      {/* progress bar */}
      <ProgressBar progress={computeProgress()} />

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
