const USERS_REQUEST = "USERS_REQUEST";
const USERS_SUCCESS = "USERS_SUCCESS";
const USERS_ERROR = "USERS_ERROR";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_REQUEST:
      return { ...state, ...payload };

    default:
      return state;
  }
};
