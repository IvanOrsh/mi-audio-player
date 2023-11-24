import { Playlist, PlayerState, PlaybackState, Controls } from "../types/types";

export default function createAudioPlayer(
  playlist: Playlist,
  onStateChange: (state: PlayerState) => void
): Controls {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let currentTrackIndex = 0;
  let repeat = false;
  let shuffle = false;
  const playbackHistory: number[] = [];

  const audio = new Audio();

  function setupAudioEventListeners() {
    audio.addEventListener("playing", emitCurrentPlayerState);
    audio.addEventListener("pause", emitCurrentPlayerState);
    audio.addEventListener("ended", onCurrentTrackEnded);
    audio.addEventListener("timeupdate", emitCurrentPlayerState);
    audio.addEventListener("loadeddata", emitCurrentPlayerState);
  }
  function removeAudioEventListeners() {
    audio.removeEventListener("playing", emitCurrentPlayerState);
    audio.removeEventListener("pause", emitCurrentPlayerState);
    audio.removeEventListener("ended", onCurrentTrackEnded);
    audio.removeEventListener("timeupdate", emitCurrentPlayerState);
    audio.removeEventListener("loadeddata", emitCurrentPlayerState);
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
  function computeRandomTrackIndex(): number {
    if (playlist.length === 1) {
      return 0;
    }
    const randomIndex = Math.floor(Math.random() * (playlist.length - 1));

    return randomIndex < currentTrackIndex ? randomIndex : randomIndex + 1;
  }
  function computeSubsequentTrackIndex(): number {
    return (currentTrackIndex + 1) % playlist.length;
  }
  function computeNextTrackIndex(): number {
    if (shuffle) {
      return computeRandomTrackIndex();
    } else {
      return computeSubsequentTrackIndex();
    }
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
    playbackHistory.push(currentTrackIndex);
    const nextTrack = computeNextTrackIndex();
    loadTrack(nextTrack);
    audio.play();
  }
  function playPreviousTrack() {
    if (playbackHistory.length === 0 || audio.currentTime > 5) {
      replayCurrentTrack();
    } else {
      const prevTrackIndex = playbackHistory.pop();
      loadTrack(prevTrackIndex || 0);
      audio.play();
    }

    audio.play();
  }
  function toggleRepeat() {
    repeat = !repeat;
    emitCurrentPlayerState();
  }
  function toggleShuffle() {
    shuffle = !shuffle;
    emitCurrentPlayerState();
  }
  function setPlaybackPosition(position: number) {
    if (isNaN(position)) {
      return;
    }

    audio.currentTime = position;
  }

  function getPlabackState(): PlaybackState {
    if (audio.paused) {
      return "PAUSED";
    } else {
      return "PLAYING";
    }
  }

  // track duration
  function getCurrentTrackDuration(): number | null {
    return isNaN(audio.duration) ? null : audio.duration;
  }
  function getCurrentTrackPlaybackPosition(): number | null {
    return isNaN(audio.currentTime) ? null : audio.currentTime;
  }

  function computeCurrentPlayerState(): PlayerState {
    return {
      playbackState: getPlabackState(),
      repeat,
      shuffle,
      currentTrackDuration: getCurrentTrackDuration(),
      currentTrackPlaybackPosition: getCurrentTrackPlaybackPosition(),
    };
  }

  init();

  return {
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,

    toggleRepeat,
    toggleShuffle,

    setPlaybackPosition,

    cleanup,
  };
}
