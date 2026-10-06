type Props = {
  completed: number;
  total: number;
};

export default function ProgressBar({
  completed,
  total,
}: Props) {
  const percent =
    (completed / total) * 100;

  return (
    <div>

      <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>

      <p className="mt-2 text-sm text-slate-600">
        {completed}/{total} hours completed
      </p>

    </div>
  );
}
