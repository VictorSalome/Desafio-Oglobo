export interface NewsList {
  name: string;
  data: News[];
  id: string;
}

export interface News {
  url: string;
  label: string;
  title: string;
  description: string;
  image: string;
}
