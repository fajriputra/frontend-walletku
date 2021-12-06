import { TOPUP } from "../constans";

const initialState = {
  data: {},
  isError: "",
  isLoading: false,
  msg: "",
};

const topup = (state = initialState, action) => {
  switch (action.type) {
    case `${TOPUP}_PENDING`: {
      return {
        ...state,
        data: {},
        isError: false,
        isLoading: true,
      };
    }

    case `${TOPUP}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }

    case `${TOPUP}_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default topup;
