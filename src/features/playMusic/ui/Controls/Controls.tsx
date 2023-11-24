import ImageButton from "@/shared/ui/ImageButton";

import playButtonIcon from "@/assets/icons/ic_play.svg";
import pauseButtonIcon from "@/assets/icons/ic_pause.svg";
import nextButtonIcon from "@/assets/icons/ic_next.svg";
import prevButtonIcon from "@/assets/icons/ic_prev.svg";
import shuffleButtonIcon from "@/assets/icons/ic_shuffle.svg";
import repeatButtonIcon from "@/assets/icons/ic_repeat.svg";

type ControlsProps = {
  onPlay: () => void;
  isPlaying: boolean;
};

export default function Controls(props: ControlsProps) {
  const { onPlay, isPlaying } = props;

  return (
    <div className="flex">
      <ImageButton src={shuffleButtonIcon} onClick={() => {}} />
      <ImageButton src={prevButtonIcon} onClick={() => {}} />
      <ImageButton
        className="mr-2 ml-2"
        src={isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlay}
      />
      <ImageButton src={nextButtonIcon} onClick={() => {}} />
      <ImageButton src={repeatButtonIcon} onClick={() => {}} />
    </div>
  );
}
