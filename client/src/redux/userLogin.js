import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from 'axios'

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/auth/login", user, { withCredentials: true });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};