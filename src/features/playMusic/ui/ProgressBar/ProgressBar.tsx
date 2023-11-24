type ProgressBarProps = {
  progress: number;
  onChange: (value: number) => void;
};

export default function ProgressBar({ progress, onChange }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        onChange={(e) => onChange(e.target.valueAsNumber)}
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
