import { Response } from "../../models/kakao/book";

export type BookData = Pick<
  Response["documents"][number],
  | "isbn"
  | "title"
  | "authors"
  | "price"
  | "sale_price"
  | "thumbnail"
  | "contents"
>;
