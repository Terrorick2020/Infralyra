import { persistReducer, persistStore as persStore } from 'redux-persist'
import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import { persistConfig } from './persist';
import { settingsReducer } from './slices';
import { type TRootStateReducer, ERootActionType } from './types';


const combineReducer: TRootStateReducer = combineReducers({
    settings: settingsReducer,
});

const actionReducer: TRootStateReducer = (state, action) => {
    switch(action.type) {
        case ERootActionType.Reset:
            state = undefined;
            break;
        case ERootActionType.Set:
        default:
            state = state;
            break;
    }

    return combineReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, actionReducer);

export const rootStore = configureStore({
    reducer: persistedReducer,
    middleware: (gDM) =>
        gDM({ serializableCheck: false }),
})

export const persistStore = persStore(rootStore)
