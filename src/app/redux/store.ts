import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./themeSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
}
const persistedReducer = persistReducer(persistConfig, themeReducer)
console.log("persistedReducer", persistedReducer)
export const store = configureStore({
    reducer: {
        theme: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
