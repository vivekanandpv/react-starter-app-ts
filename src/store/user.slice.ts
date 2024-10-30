import { createSlice } from "@reduxjs/toolkit";

export interface User {
  username: string;
  country: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "default",
    country: "India",
  } as User,
  reducers: {
    changeUser: (state, action) => {
      state.username = action.payload.username;
      state.country = action.payload.country;
    },
  },
});
