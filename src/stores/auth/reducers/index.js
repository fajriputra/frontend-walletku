import { USER_LOGIN } from "../constans";

const initialState = {
  data: {},
  isError: "",
  isLoading: false,
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case `${USER_LOGIN}_PENDING`: {
      return {
        ...state,
        data: {},
        isError: false,
        isLoading: true,
      };
    }

    case `${USER_LOGIN}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }

    case `${USER_LOGIN}_REJECTED`: {
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

export default auth;
