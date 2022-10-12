import { configureStore } from "@reduxjs/toolkit";
import user from "@/store/features/user";
import quiz from "@/store/features/quiz";

export const store = configureStore({
  reducer: {
    user,
    quiz,
  },
});
