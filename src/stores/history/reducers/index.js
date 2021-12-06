import { GET_DATA_TRANSACTION } from "../constans";

const initialState = {
  data: {},
  isError: "",
  isLoading: false,
  msg: "",
  pageInfo: {},
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DATA_TRANSACTION}_PENDING`: {
      return {
        ...state,
        data: {},
        isError: false,
        isLoading: true,
      };
    }

    case `${GET_DATA_TRANSACTION}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
        pageInfo: action.payload.data.pagination,
      };
    }

    case `${GET_DATA_TRANSACTION}_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
        pageInfo: {},
      };
    }

    default: {
      return state;
    }
  }
};

export default history;
