/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpWithGmail = createAsyncThunk(
  "auth/signUpWithGmail",
  async (_, thunkAPI) => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const listenAuthState = createAsyncThunk(
  "auth/listenAuthState",
  async (_, thunkAPI) => {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          thunkAPI.dispatch(authSlice.actions.setUser(user));
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
      thunkAPI.dispatch(authSlice.actions.setUnsubscribe(unsubscribe));
    });
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
    unsubcribe: null,
  },
  reducers: {
    setUnsubscribe: (state, action) => {
      state.unsubcribe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        (state.user = action.payload), (state.loading = false);
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.error = action.error.message), (state.loading = false);
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.user = action.payload), (state.loading = false);
      })
      .addCase(login.rejected, (state, action) => {
        (state.user = action.error.message), (state.loading = false);
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(signUpWithGmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpWithGmail.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signUpWithGmail.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(listenAuthState.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listenAuthState.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(listenAuthState.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setUser, setUnsubscribe } = authSlice.actions;
export default authSlice.reducer;
