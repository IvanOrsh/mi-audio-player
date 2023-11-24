import { Playlist } from "../..";

export default function createAudioPlayer(playlist: Playlist) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let currentTrackIndex = 0;
  const audio = new Audio();

  function loadTrack(index: number) {
    audio.src = playlist[index].audioSrc;
    // audio.src =
    //   "https://wleckkrhtkopzrztmrus.supabase.co/storage/v1/object/public/songs/song-i'm%20sinking%20father-lpbg7c2q?t=2023-11-24T15%3A36%3A18.800Z";
    audio.load();
    currentTrackIndex = index;
  }

  function init() {
    loadTrack(0);
  }

  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      console.log(audio);
    } else {
      audio.pause();
    }
  }

  init();
  return togglePlayPause;
}
