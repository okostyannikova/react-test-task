import { combineReducers } from "redux";
import usersReduser from "../ducks/users";

const rootReduser = combineReducers({
  users: usersReduser
});

export default rootReduser;
