import { BookData } from "./type";

export const isBookData = (value: unknown): value is BookData => {
  if (!value || typeof value !== "object") return false;

  const book = value as any;

  return (
    typeof book.isbn === "string" &&
    typeof book.title === "string" &&
    Array.isArray(book.authors) &&
    typeof book.price === "number" &&
    typeof book.sale_price === "number" &&
    typeof book.thumbnail === "string" &&
    typeof book.contents === "string"
  );
};
