import axios from "helpers/axios";
import { TOPUP } from "../constans";

export const topUp = (data) => {
  return {
    type: TOPUP,
    payload: axios.post("/transaction/top-up", data),
  };
};
