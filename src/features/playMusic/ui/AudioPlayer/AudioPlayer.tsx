import { useRef } from "react";

import Controls from "../Controls/Controls";
import ProgressBar from "@/shared/ui/ProgressBar";
import SongInfo from "@/shared/ui/SongInfo";
import createAudioPlayer from "../../model/services/createAudioPlayer";

import { playlist } from "@/assets/playlist/playlist";

export default function AudioPlayer() {
  const tolegglePlayPauseRef = useRef(createAudioPlayer(playlist));

  return (
    <div className="flex flex-col items-center gap-y-4">
      <SongInfo />

      {/* progress bar */}
      <ProgressBar />

      {/* controls */}
      <div>
        <Controls onPlay={tolegglePlayPauseRef.current} />
      </div>
    </div>
  );
}
