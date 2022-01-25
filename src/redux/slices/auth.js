import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config/baseURL";

const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  isError: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserThunk.pending, (state, action) => {
      state.isAuthenticating = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.isAuthenticating = false;
      state.isError = false;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.isAuthenticating = false;
      state.isError = true;
    });
    builder.addCase(loginUserThunk.pending, (state, action) => {
      state.isAuthenticating = true;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isAuthenticating = false;
      state.isError = false;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.isAuthenticating = false;
      state.isError = true;
    });
  },
});

export const authSelector = (state) => state.auth;

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;

export const registerUserThunk = createAsyncThunk(
  "/auth/register",
  async (body) => {
    const response = await axios({
      method: "POST",
      url: `${BASE_URL}/auth/register`,
      data: body,
    });

    return response.data;
  }
);
export const loginUserThunk = createAsyncThunk("/auth/login", async (body) => {
  const response = await axios({
    method: "POST",
    url: `${BASE_URL}/auth/login`,
    data: body,
  });
  window.localStorage.setItem("acces_token", response.data.data.access_token);
  return response.data;
});

export function logoutUserThunk(page, limit) {
  return async (dispatch) => {
    window.localStorage.clear();
    dispatch(logoutUser());
  };
}
