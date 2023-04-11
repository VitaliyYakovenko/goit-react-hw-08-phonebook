import { configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import { authReducer } from './user/slice';
import { createContacts, createFilter } from "./contacts/slice";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        user: persistedReducer,
        contacts: createContacts.reducer,
        filter: createFilter.reducer,
    },
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})



export const persistor = persistStore(store);









// import { configureStore} from "@reduxjs/toolkit";
// import { authReducer } from './user/slice';
// import { createContacts, createFilter } from "./contacts/slice";




// export const store = configureStore({
//     reducer: {
//         user: authReducer,
//         contacts: createContacts.reducer,
//         filter: createFilter.reducer,
//     },

// })




