import { configureStore } from "@reduxjs/toolkit";
// reducer
import users from "./slice";

const store = configureStore({
    reducer: {
        users: users
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch