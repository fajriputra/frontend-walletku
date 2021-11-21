import { GET_USERBY_ID } from "../constans";
import axios from "helpers/axios";

export const getUserById = (data) => {
  return {
    type: GET_USERBY_ID,
    payload: axios.get(`/user/profile/${data}`),
  };
};
