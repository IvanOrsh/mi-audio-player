import { twMerge } from "tailwind-merge";

type ImageButtonProps = {
  src: string;
  onClick: () => void;
  className?: string;
};

export default function ImageButton(props: ImageButtonProps) {
  const { src, onClick, className } = props;

  const buttonSize = 65;

  return (
    <button
      onClick={onClick}
      className="hover:scale-110 transition duration-300 ease-in-out"
    >
      <img
        src={src}
        alt="control"
        width={buttonSize}
        height={buttonSize}
        className={twMerge(
          `
          drop-shadow-lg`,
          className
        )}
      />
    </button>
  );
}
