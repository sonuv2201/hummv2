
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    userId: localStorage.getItem('id') ? localStorage.getItem('id') : null,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : null,
    isLogin:false,
    profile: []
  },
  reducers: {
    setLogin(state,action){
      console.log(action.payload);
      state.token = action.payload.access;
      state.username = action.payload.user_name;
      state.userId = action.payload.id;
      state.isLogin=true;
    },
    setLogout(state,action){
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('username');
      localStorage.removeItem('currentState');
      localStorage.removeItem('emailState');
      localStorage.removeItem('sessionState');
      localStorage.removeItem('mobileState');
      state.token = null;
      state.username = null;
      state.userId = null;
      state.isLogin=false;
    }
  },
})

export const {setLogin,setLogout} = authSlice.actions;
export default authSlice.reducer;