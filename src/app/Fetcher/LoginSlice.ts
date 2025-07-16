
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstance } from "../../api/axios.config";
import type { RootState } from "../store";


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
  data: LoginResponse | null; // 👈 كده حددنا النوع بدقة
  error: string | null;
}

const initialState: LoginState = {
  loading: false,
  data: null,
  error: null,
};


export const userLogin = createAsyncThunk("userLogin/Login", async(user ,thunkAPI)=>{

const {rejectWithValue}=thunkAPI



try{
  const {data} =await axiosinstance.post("/api/auth/local",user)
  return data
}catch(error){
  return rejectWithValue(error)
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
});

 builder.addCase(userLogin.rejected,
  
  
  (state, action) => {
  state.loading = false;
  state.data = null;
  state.error = typeof action.error.message === "string"
    ? action.error.message
    : "Login failed";
});


  },

});




export const selectLogin = (state: RootState) => state.Logdin;
export default LoginSlice.reducer;
