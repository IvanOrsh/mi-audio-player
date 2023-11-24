import ImageButton from "@/shared/ui/ImageButton";

import playButtonIcon from "@/assets/icons/ic_play.svg";
import pauseButtonIcon from "@/assets/icons/ic_pause.svg";
import nextButtonIcon from "@/assets/icons/ic_next.svg";
import prevButtonIcon from "@/assets/icons/ic_prev.svg";
import shuffleButtonIcon from "@/assets/icons/ic_shuffle.svg";
import repeatButtonDisabled from "@/assets/icons/ic_repeat_disabled.svg";
import repeatButtonIcon from "@/assets/icons/ic_repeat.svg";

type ControlsProps = {
  onPlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  isPlaying: boolean;

  repeat: boolean;
  onRepeat: () => void;
};

export default function Controls(props: ControlsProps) {
  const { onPlay, isPlaying, onPrev, onNext, repeat, onRepeat } = props;

  return (
    <div className="flex">
      <ImageButton src={shuffleButtonIcon} onClick={() => {}} />
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
