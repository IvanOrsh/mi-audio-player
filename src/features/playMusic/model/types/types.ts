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
};

export const InitialPlayerState: PlayerState = {
  playbackState: "PAUSED",
};

export type Controls = {
  togglePlayPause: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
};
