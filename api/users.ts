import axios from "axios";
import { API_URL } from "./constants";
import serialize from "../utils/serialize";

interface FindUsersProps {
  q: string
  page: number
  per_page?: number;
}


export const findUsers = async (params: FindUsersProps) => {
  const paramsParse = serialize(params)
  return await axios
    .get(API_URL + `/search/users?${paramsParse}`)
    .then((res) => res.data)
    .catch((error) => error.message);
}

