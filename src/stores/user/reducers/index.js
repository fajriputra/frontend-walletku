import { GET_ALL_USER, GET_USERBY_ID } from "../constans";

const initialState = {
  allUser: [],
  userById: {},
  isError: "",
  isLoading: false,
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_USER}_PENDING`: {
      return {
        ...state,
        allUser: [],
        isError: false,
        isLoading: true,
      };
    }

    case `${GET_ALL_USER}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        allUser: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }

    case `${GET_ALL_USER}_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        allUser: [],
        msg: action.payload.response.data.msg,
      };
    }

    case `${GET_USERBY_ID}_PENDING`: {
      return {
        ...state,
        userById: {},
        isError: false,
        isLoading: true,
      };
    }

    case `${GET_USERBY_ID}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        userById: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }

    case `${GET_USERBY_ID}_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        userById: {},
        msg: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default user;
