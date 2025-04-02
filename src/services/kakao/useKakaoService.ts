import { useQuery } from "@tanstack/react-query";
import { Params } from "../../models/kakao/book";
import queryOptions from "./queries";

export const useKakaoBookList = (params: Params) =>
  useQuery(queryOptions.book(params));
