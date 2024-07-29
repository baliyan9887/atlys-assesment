import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./";

// Define a type for the slice state
export interface AuthState {
  // Make sure this type is exported
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  state: string;
  user: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  state: "",
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = "Jane";
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;

// Thunk for logging in
export const loginAsync =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(loginStart());

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock validation for email and password
      if (email === "user@example.com" && password === "password") {
        dispatch(loginSuccess());
        return {
          code: 200,
          message: "You have Logged In ",
        };
      } else {
        return {
          code: 400,
          message: "Invalid email or password",
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
