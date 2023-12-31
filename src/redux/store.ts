import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counterSlice";
import logger from "./middlewares/logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  //devTools: True
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
