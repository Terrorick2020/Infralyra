'use client'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { rootStore, persistStore } from '@/src/shared/store';
import type { TClearProps } from '@/src/shared/type';


export function StoreProvider({children}: TClearProps) {
    return (
        <Provider store={rootStore}>
            <PersistGate loading={null} persistor={persistStore}>
                {children}
            </PersistGate>
        </Provider>
    );
}
