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
};

export const InitialPlayerState: PlayerState = {
  playbackState: "PAUSED",
  repeat: false,
  shuffle: false,
};

export type Controls = {
  togglePlayPause: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;

  toggleRepeat: () => void;
  toggleShuffle: () => void;

  cleanup: () => void;
};
