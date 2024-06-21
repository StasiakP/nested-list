export interface Task {
  id: string;
  taskNumber: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  percentageOfProgress: number;
  startDate: string;
  endDate: string;
  childTasks: Task[];
}

export interface TaskExpandable {
  id: string;
  taskNumber: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  percentageOfProgress: number;
  startDate: string;
  endDate: string;
  childTasks: TaskExpandable[];
  isExpanded: boolean;
}
