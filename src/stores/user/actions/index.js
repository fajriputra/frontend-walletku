import { GET_ALL_USER, GET_USERBY_ID } from "../constans";
import axios from "helpers/axios";

export const getAllUser = (page, limit, search, sort) => {
  return {
    type: GET_ALL_USER,
    payload: axios.get(
      `/user?page=${page}&limit=${limit}&search=${search}&sort=${sort}`
    ),
  };
};

export const getUserById = (data) => {
  return {
    type: GET_USERBY_ID,
    payload: axios.get(`/user/profile/${data}`),
  };
};
