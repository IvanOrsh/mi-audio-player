export default function ProgressBar() {
  return (
    <div className="flex flex-col gap-y-1">
      <input
        type="range"
        min="1"
        max="100"
        value={50}
        step="0.25"
        className="slider"
      />
      <div className="flex w-full justify-between">
        <span className="text-xs">01:00</span>
        <span className="text-xs">02:00</span>
      </div>
    </div>
  );
}
