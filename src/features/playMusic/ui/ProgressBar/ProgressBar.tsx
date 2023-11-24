type ProgressBarProps = {
  progress: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
};

export default function ProgressBar(props: ProgressBarProps) {
  const { progress, onChange, leftLabel, rightLabel } = props;

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
        <span className="text-sm">{leftLabel}</span>
        <span className="text-sm">{rightLabel}</span>
      </div>
    </div>
  );
}
