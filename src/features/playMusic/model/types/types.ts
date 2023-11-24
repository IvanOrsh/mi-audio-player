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
