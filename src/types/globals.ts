export type Project = {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
  teamMembers: TeamMember[];
  recentActivities: Activity[];
};

export const TaskStatus = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done"
} as const;
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export type Task = {
  id: number;
  projectId: number;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: Date;
  assignedMembers: TeamMember[];
};

export type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export type Activity = {
  id: number;
  projectId: number;
  description: string;
  timestamp: Date;
};
