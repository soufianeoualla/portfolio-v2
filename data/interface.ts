interface stack {
  id: number;
  title: string;
  name: string;
}

export interface singleProject {
  id: string;
  title: string;
  image: string;
  github: string;
  LiveDemo: string;
  createdAt: Date;
  updatedAt: Date | null;
  userId: string;
  stack: stack[];
  error: string;
}
