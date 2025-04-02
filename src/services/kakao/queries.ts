import { Params } from "../../models/kakao/book";
import KakaoService from "./service";

const queryKeys = {
  book: ["kakao", "book"],
};

const queryOptions = {
  book: (params: Params) => ({
    queryKey: queryKeys.book,
    queryFn: () => KakaoService.getBooks(params),
  }),
};

export default queryOptions;
