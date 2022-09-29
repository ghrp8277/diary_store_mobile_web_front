export interface Notice {
  id: number;
  is_important: number;
  title: string;
  file_name: string;
  username: string;
  is_visible: boolean;
  createdAt: Date;
}
