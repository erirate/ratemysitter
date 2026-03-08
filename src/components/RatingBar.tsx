interface RatingBarProps {
  label: string;
  value: number;
  max?: number;
}

const RatingBar = ({ label, value, max = 100 }: RatingBarProps) => {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground w-36 flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-green transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-medium text-foreground w-8 text-right">{value}%</span>
    </div>
  );
};

export default RatingBar;
