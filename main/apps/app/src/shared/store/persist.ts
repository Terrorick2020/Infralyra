import { settingsSliceName } from './slices';
import type { PersistConfig } from 'redux-persist';
import type { IRootState } from './types';

import storage from 'redux-persist/lib/storage';


export const persistConfig: PersistConfig<IRootState> = {
    key: 'root',
    storage,
    whitelist: [ settingsSliceName ],
}
