export type Assignment = {
  id: string;
  title: string;
  dueDate: string;

  estimatedHours: number;

  completedHours: number;

  difficulty: "easy" | "medium" | "hard";
};
``
