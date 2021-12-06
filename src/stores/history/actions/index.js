import { GET_DATA_TRANSACTION, GET_DATA_TRANSACTIONID } from "../constans";
import axios from "helpers/axios";

export const getDataTransaction = (page, limit, filter) => {
  return {
    type: GET_DATA_TRANSACTION,
    payload: axios.get(
      `/transaction/history?page=${page}&limit=${limit}&filter=${filter}`
    ),
  };
};

export const getTransactionById = (data) => {
  return {
    type: GET_DATA_TRANSACTIONID,
    payload: axios.get(`/transaction/history/${data}`),
  };
};
