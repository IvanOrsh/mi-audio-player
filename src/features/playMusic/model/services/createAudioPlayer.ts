import { Playlist, PlayerState, PlaybackState, Controls } from "../types/types";

export default function createAudioPlayer(
  playlist: Playlist,
  onStateChange: (state: PlayerState) => void
): Controls {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let currentTrackIndex = 0;
  let repeat = false;
  const audio = new Audio();

  function setupAudioEventListeners() {
    audio.addEventListener("playing", emitCurrentPlayerState);
    audio.addEventListener("pause", emitCurrentPlayerState);
    audio.addEventListener("ended", onCurrentTrackEnded);
  }
  function removeAudioEventListeners() {
    audio.removeEventListener("playing", emitCurrentPlayerState);
    audio.removeEventListener("pause", emitCurrentPlayerState);
    audio.removeEventListener("ended", onCurrentTrackEnded);
  }
  function emitCurrentPlayerState() {
    const state = computeCurrentPlayerState();
    onStateChange(state);
  }

  function onCurrentTrackEnded() {
    if (repeat) {
      replayCurrentTrack();
    } else {
      playNextTrack();
    }
  }

  function init() {
    setupAudioEventListeners();
    loadTrack(0);
  }
  function cleanup() {
    removeAudioEventListeners();
    audio.pause();
  }

  function loadTrack(index: number) {
    audio.src = playlist[index].audioSrc;
    currentTrackIndex = index;
  }
  function replayCurrentTrack() {
    audio.currentTime = 0;
    audio.play();
  }

  // Controls
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  function playNextTrack() {
    loadTrack((currentTrackIndex + 1) % playlist.length);
    audio.play();
  }
  function playPreviousTrack() {
    loadTrack((currentTrackIndex - 1 + playlist.length) % playlist.length);
    audio.play();
  }
  function toggleRepeat() {
    repeat = !repeat;
    emitCurrentPlayerState();
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
      repeat,
    };
  }

  init();

  return {
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,

    toggleRepeat,

    cleanup,
  };
}
