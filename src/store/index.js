import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import appSlice from "./slice/appSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    app: appSlice,
  },
});

export default store;
