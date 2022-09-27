import { configureStore } from "@reduxjs/toolkit";
import user from "@/store/features/user";

export const store = configureStore({
  reducer: {
    user,
  },
});
