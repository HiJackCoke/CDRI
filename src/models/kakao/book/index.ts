export type Params = {
  query: string;
  sort?: "accuracy" | "latest";
  page?: number;
  size?: number;
  target?: "title" | "isbn" | "publisher" | "person";
};

type Document = {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
};

type Meta = {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
};

export type Response = {
  meta: Meta;
  documents: Document[];
};
