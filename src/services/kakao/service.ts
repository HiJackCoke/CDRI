import axios, { AxiosResponse } from "axios";
import { Params, Response } from "../../models/kakao/book";

const KAKAO_KEY = import.meta.env.VITE_API_KEY;
const KAKAO = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK " + KAKAO_KEY,
  },
});

class Service {
  async getBooks(params: Params): Promise<AxiosResponse<Response>> {
    return await KAKAO.get<Response>("/v3/search/book", { params });
  }
}

const KakaoService = new Service();

export default KakaoService;
