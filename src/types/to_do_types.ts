export interface to_do_content {
  title: string;
}
export interface to_do {
  task: to_do_content;
  index: number;
  removeTask: (index: number) => void;
}
