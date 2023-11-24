import { useState, useRef, useEffect } from "react";

import {
  Playlist,
  InitialPlayerState,
  PlayerState,
  Controls,
} from "../types/types";
import createAudioPlayer from "../services/createAudioPlayer";

interface AudioPlayer extends Controls {
  playerState: PlayerState;
}

export function useAudioPlayer(playlist: Playlist): AudioPlayer {
  const [playerState, setPlayerState] =
    useState<PlayerState>(InitialPlayerState);

  const playerRef = useRef<Controls | null>(null);

  useEffect(() => {
    const newPlayer = createAudioPlayer(playlist, setPlayerState);
    playerRef.current = newPlayer;

    () => {
      newPlayer.cleanup();
    };
  }, [playlist]);

  function togglePlayPause() {
    if (playerRef.current) {
      playerRef.current.togglePlayPause();
    }
  }

  function playNextTrack() {
    if (playerRef.current) {
      playerRef.current.playNextTrack();
    }
  }

  function playPreviousTrack() {
    if (playerRef.current) {
      playerRef.current.playPreviousTrack();
    }
  }

  function cleanup() {
    if (playerRef.current) {
      playerRef.current.cleanup();
    }
  }
  return {
    playerState,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    cleanup,
  };
}
