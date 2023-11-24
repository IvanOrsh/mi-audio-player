export type TrackMetadata = {
  artist: string;
  title: string;
  coverArtSrc: string;
};

export type Track = {
  audioSrc: string;
  metadata: TrackMetadata;
};

export type Playlist = Track[];

export type PlaybackState = "PLAYING" | "PAUSED";

export type PlayerState = {
  playbackState: PlaybackState;
  repeat: boolean;
  shuffle: boolean;
  currentTrackDuration: number | null;
  currentTrackPlaybackPosition: number | null;
};

export const InitialPlayerState: PlayerState = {
  playbackState: "PAUSED",
  repeat: false,
  shuffle: false,
  currentTrackDuration: null,
  currentTrackPlaybackPosition: null,
};

export type Controls = {
  togglePlayPause: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;

  toggleRepeat: () => void;
  toggleShuffle: () => void;

  cleanup: () => void;
};
