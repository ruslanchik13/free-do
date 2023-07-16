import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducers/backImitationSlice";

const store = configureStore({
    reducer: {
        backImitation: reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch