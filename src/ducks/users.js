import axios from "axios";

const USERS_REQUEST = "USERS_REQUEST";
const USERS_SUCCESS = "USERS_SUCCESS";
const USERS_ERROR = "USERS_ERROR";

const initialState = {
  loading: false,
  usersList: [],
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: payload.users
      };
    case USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

const apiUrl = "https://api.github.com";

export const fetchUsers = () => dispatch => {
  dispatch({ type: USERS_REQUEST });

  axios(apiUrl + "/search/users", {
    params: {
      q: "location:odessa",
      page: 1,
      per_page: 10
    }
  })
    .then(res => {
      const users = res.data.items;
      return Promise.all(
        users.map(user =>
          axios(`${apiUrl}/users/${user.login}`).then(res => res.data)
        )
      );
    })
    .then(users => {
      dispatch({
        type: USERS_SUCCESS,
        payload: { users }
      });
    })
    .catch(err => dispatch({ type: USERS_ERROR }));
};
