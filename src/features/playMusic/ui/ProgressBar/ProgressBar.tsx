type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        className="slider"
      />
      <div className="flex w-full justify-between text-primary">
        <span className="text-sm">01:00</span>
        <span className="text-sm">02:00</span>
      </div>
    </div>
  );
}
