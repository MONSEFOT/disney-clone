import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/user_slice';

export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});