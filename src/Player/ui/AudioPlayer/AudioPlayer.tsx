import Controls from "../Controls/Controls";
import ProgressBar from "../ProgressBar/ProgressBar";
import SongInfo from "../SongInfo/SongInfo";
import { useAudioPlayer } from "@/model/hooks/useAudioPlayer";
import { formatTime } from "@/model/lib/formatTime";
import { playlist } from "@/shared/assets/playlist/playlist";

export default function AudioPlayer() {
  const {
    playerState: {
      playbackState,
      repeat,
      shuffle,
      currentTrackDuration,
      currentTrackPlaybackPosition,
      currentTrackMetadata,
    },
    togglePlayPause,
    playPreviousTrack,
    playNextTrack,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(playlist);

  const setProgress = (value: number) => {
    if (!currentTrackDuration) {
      return;
    }

    setPlaybackPosition((value * currentTrackDuration) / 100);
  };

  const computeProgress = (): number => {
    if (!currentTrackDuration || !currentTrackPlaybackPosition) {
      return 0;
    }

    return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      <SongInfo
        title={currentTrackMetadata?.title}
        artist={currentTrackMetadata?.artist}
        coverArtSrc={currentTrackMetadata?.coverArtSrc}
      />

      {/* progress bar */}
      <ProgressBar
        progress={computeProgress()}
        onChange={setProgress}
        leftLabel={formatTime(currentTrackPlaybackPosition)}
        rightLabel={formatTime(currentTrackDuration)}
      />

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
