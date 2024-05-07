import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categoriesSlice";
import persistStore from "redux-persist/es/persistStore";
import productsReducer from "./products/productsSlice";
import recommendedReducer from "./recommended/recommendedSlice";
const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: [], //whitelist significa los datos que queremos persistir
};

const persistedReducer = persistReducer(persistConfig, reducers); //los argumentos son la config + lo que queremos que persista
export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
