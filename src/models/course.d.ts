declare namespace Models {
  export interface Course {
    id: string;
    title: string;
    description: string;
    link: string;
    tasks: Task[];
  }

  export interface Task {
    id: string;
    title: string;
    description: string;
    criteria: string[];
    sandbox?: string;
    usefulLinks?: string[];
  }
}
