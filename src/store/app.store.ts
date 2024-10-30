import { User, userSlice } from "./user.slice";
import { configureStore } from "@reduxjs/toolkit";

export interface AppState {
  user: User;
}

export const appStore = configureStore<AppState>({
  reducer: {
    user: userSlice.reducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
