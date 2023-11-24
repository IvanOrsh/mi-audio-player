import { Playlist, PlayerState, PlaybackState } from "../types/types";

export default function createAudioPlayer(
  playlist: Playlist,
  onStateChange: (state: PlayerState) => void
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let currentTrackIndex = 0;
  const audio = new Audio();

  function setupAudioEventListeners() {
    audio.addEventListener("playing", emitCurrentPlayerState);
    audio.addEventListener("pause", emitCurrentPlayerState);
  }
  function emitCurrentPlayerState() {
    const state = computeCurrentPlayerState();
    onStateChange(state);
  }

  function init() {
    setupAudioEventListeners();
    loadTrack(0);
  }

  function loadTrack(index: number) {
    audio.src = playlist[index].audioSrc;
    currentTrackIndex = index;
  }

  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      console.log(audio);
    } else {
      audio.pause();
    }
  }

  function getPlabackState(): PlaybackState {
    if (audio.paused) {
      return "PAUSED";
    } else {
      return "PLAYING";
    }
  }

  function computeCurrentPlayerState(): PlayerState {
    return {
      playbackState: getPlabackState(),
    };
  }

  init();
  return togglePlayPause;
}
