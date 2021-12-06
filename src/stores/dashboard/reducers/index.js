import { GET_DASHBOARD } from "../constans";

const initialState = {
  data: {},
  isError: "",
  isLoading: false,
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DASHBOARD}_PENDING`: {
      return {
        ...state,
        data: {},
        isError: false,
        isLoading: true,
      };
    }

    case `${GET_DASHBOARD}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }

    case `${GET_DASHBOARD}_REJECTED`: {
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

export default user;
