import ImageButton from "@/shared/ui/ImageButton";

import playButtonIcon from "@/shared/assets/icons/ic_play.svg";
import pauseButtonIcon from "@/shared/assets/icons/ic_pause.svg";
import nextButtonIcon from "@/shared/assets/icons/ic_next.svg";
import prevButtonIcon from "@/shared/assets/icons/ic_prev.svg";
import shuffleButtonIcon from "@/shared/assets/icons/ic_shuffle.svg";
import shuffleButtonDisabled from "@/shared/assets/icons/ic_shuffle_disabled.svg";
import repeatButtonDisabled from "@/shared/assets/icons/ic_repeat_disabled.svg";
import repeatButtonIcon from "@/shared/assets/icons/ic_repeat.svg";

type ControlsProps = {
  onPlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  onShuffle: () => void;
  isPlaying: boolean;

  repeat: boolean;
  shuffle: boolean;
  onRepeat: () => void;
};

export default function Controls(props: ControlsProps) {
  const {
    onPlay,
    isPlaying,
    onPrev,
    onNext,

    repeat,
    onRepeat,

    shuffle,
    onShuffle,
  } = props;

  return (
    <div className="flex">
      <ImageButton
        src={shuffle ? shuffleButtonIcon : shuffleButtonDisabled}
        onClick={onShuffle}
      />
      <ImageButton src={prevButtonIcon} onClick={onPrev} />
      <ImageButton
        className="mr-2 ml-2"
        src={isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlay}
      />
      <ImageButton src={nextButtonIcon} onClick={onNext} />
      <ImageButton
        src={repeat ? repeatButtonIcon : repeatButtonDisabled}
        onClick={onRepeat}
      />
    </div>
  );
}
