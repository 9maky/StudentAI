export interface stats {
  img: string | undefined;
  title: string;
  current_data: number;
  goal_data: number;
}

export const stats: stats[] = [
  {
    title: "Finished Tasks",
    current_data: 1,
    goal_data: 115,
  },
  {
    title: "Academic Goal",
    current_data: 4.4,
    goal_data: 5.0,
  },
  {
    title: "Attendance",
    current_data: 99,
    goal_data: 211,
  },
];
