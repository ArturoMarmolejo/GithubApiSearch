import axios from "axios";
import { API_URL } from "./constants";
import serialize from "../utils/serialize";


interface FindRepositoriesProps {
  q: string
  page: number
  per_page?: number;
}

export const findRepositories = async (params: FindRepositoriesProps) => {
  const paramsParse = serialize(params)
  const url = API_URL + `/search/repositories?${paramsParse}`;

  return await axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => error.message);
}

