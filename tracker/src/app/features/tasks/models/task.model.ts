export interface Task {
  id: number;
  title: string;
  description: string;
  statusId: number;
  categoryId: number;
  date: string;
  executorId: number;
  checklist: ChecklistItem[];
}

export interface ChecklistItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface Status {
  id: number,
  title: string,
  color: string
}
