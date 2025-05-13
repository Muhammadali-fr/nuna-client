import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./feature/counterSlice";

export const store = configureStore({
    reducer: {
<<<<<<< HEAD
        
=======
        counter: counterReducer,
>>>>>>> 3d8883fb9f52645825be8b9517c13fccbf25c1a6
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;