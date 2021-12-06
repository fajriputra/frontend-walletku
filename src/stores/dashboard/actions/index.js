import { GET_DASHBOARD } from "../constans";
import axios from "helpers/axios";

export const getDashboard = (data) => {
  return {
    type: GET_DASHBOARD,
    payload: axios.get(`/dashboard/${data}`),
  };
};
