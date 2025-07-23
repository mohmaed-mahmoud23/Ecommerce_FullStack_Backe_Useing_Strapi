import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstance } from "../../api/axios.config";
import type { RootState } from "../store";
import { toast } from "react-toastify"; // 👈 ضيفنا التوست
import "react-toastify/dist/ReactToastify.css"; // 👈 مهم للتصميم
import CookiServes from "../../servers/CookiServes";
interface User {
  id: number;
  username: string;
  email: string;
}
interface LoginResponse {
  jwt: string;
  user: User;
}
interface LoginState {
  loading: boolean;
  data: LoginResponse | null;
  error: string | null;
}
const initialState: LoginState = {
  loading: false,
  data: null,
  error: null,
};
export const userLogin = createAsyncThunk(
  "userLogin/Login",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosinstance.post("/api/auth/local", user);

      toast.success("Login succes");
      return data;
    } catch (error: any) {
      const message =
        error.response?.data?.error?.message || "error";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state: LoginState) => {
      state.loading = true;
    });

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;


      const date=new Date()
      date.setTime(date.getTime()+(1000*60*60*24))
      const option={path:"/",expires :date}

      CookiServes.set("jwt",action.payload,option)


    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error =
        typeof action.payload === "string"
          ? action.payload
          : "Login failed";
    });
  },
});

export const selectLogin = (state: RootState) => state.Logdin;
export default LoginSlice.reducer;
