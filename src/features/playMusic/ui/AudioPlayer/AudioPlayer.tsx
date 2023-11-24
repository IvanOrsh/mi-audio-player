import { useRef, useState } from "react";

import Controls from "../Controls/Controls";
import ProgressBar from "@/shared/ui/ProgressBar";
import SongInfo from "@/shared/ui/SongInfo";
import createAudioPlayer from "../../model/services/createAudioPlayer";
import { InitialPlayerState, PlayerState } from "../../model/types/types";

import { playlist } from "@/assets/playlist/playlist";

export default function AudioPlayer() {
  const [playerState, setPlayerState] =
    useState<PlayerState>(InitialPlayerState);

  const togglePlayPauseRef = useRef(
    createAudioPlayer(playlist, setPlayerState)
  );

  return (
    <div className="flex flex-col items-center gap-y-4">
      <SongInfo />

      {/* progress bar */}
      <ProgressBar />

      {/* controls */}
      <div>
        <Controls
          onPlay={togglePlayPauseRef.current}
          isPlaying={playerState.playbackState === "PLAYING"}
        />
      </div>
    </div>
  );
}
