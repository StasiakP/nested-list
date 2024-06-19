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
