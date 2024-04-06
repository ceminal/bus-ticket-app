import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./slices/ticketSlice";
import userReducer, { login, logout } from "./slices/userSlice";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        tickets: ticketReducer,
        user: userReducer, 
    },
    preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export { store as default, login, logout };
