import axios from "axios";
import { API_URL } from "./constants";


export const findRepositories = async (query: string) => {
  return await axios
    .get(API_URL + `/search/repositories?q=${query}{&page,per_page,sort,order}`)
    .then((res) => res.data)
    .catch((error) => error.message);
}
