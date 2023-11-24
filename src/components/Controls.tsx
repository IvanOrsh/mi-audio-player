import ImageButton from "./ImageButton";

import playButtonIcon from "../assets/icons/ic_play.svg";
// import pauseButtonIcon from "../assets/icons/ic_pause.svg";
import nextButtonIcon from "../assets/icons/ic_next.svg";
import prevButtonIcon from "../assets/icons/ic_prev.svg";
import shuffleButtonIcon from "../assets/icons/ic_shuffle.svg";
import repeatButtonIcon from "../assets/icons/ic_repeat.svg";

export default function Controls() {
  // shuffle

  return (
    <div className="flex mt-4">
      <ImageButton src={shuffleButtonIcon} onClick={() => {}} />
      <ImageButton src={prevButtonIcon} onClick={() => {}} />
      <ImageButton
        className="mr-2 ml-2"
        src={playButtonIcon}
        onClick={() => {}}
      />
      <ImageButton src={nextButtonIcon} onClick={() => {}} />
      <ImageButton src={repeatButtonIcon} onClick={() => {}} />
    </div>
  );
}
