import { Params } from "../../models/kakao/book";
import KakaoService from "./service";

const queryKeys = {
  book: (params: Params) => ["kakao", "book", ...Object.values(params)],
};

const queryOptions = {
  book: (params: Params) => ({
    queryKey: queryKeys.book(params),
    queryFn: () => KakaoService.getBooks(params),
  }),
};

export default queryOptions;
