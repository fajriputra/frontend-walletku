import { GET_USERBY_ID } from "../constans";

const initialState = {
  data: {},
  isError: "",
  isLoading: false,
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERBY_ID}_PENDING`: {
      return {
        ...state,
        data: {},
        isError: false,
        isLoading: true,
      };
    }

    case `${GET_USERBY_ID}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }

    case `${GET_USERBY_ID}_REJECTED`: {
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
