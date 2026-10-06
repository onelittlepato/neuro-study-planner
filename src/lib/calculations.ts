export function getProgress(
  completedHours: number,
  estimatedHours: number
) {
  return Math.min(
    (completedHours / estimatedHours) * 100,
    100
  );
}

export function getUrgency(
  dueDate: string,
  remainingHours: number
) {
  const now = new Date();

  const due = new Date(dueDate);

  const daysLeft =
    (due.getTime() - now.getTime()) /
    (1000 * 60 * 60 * 24);

  const ratio =
    remainingHours /
    Math.max(daysLeft, 1);

  if (ratio < 0.5) return "green";

  if (ratio < 2) return "yellow";

  return "red";
}
