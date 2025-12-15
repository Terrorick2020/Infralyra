import {
    type IRootState,
    type TRootDispatch,
    type TReducerFn,
    ERootActionType,
} from './types';

import { selectSettings } from './reselector';
import { rootStore, persistStore } from './store';


export { 
    type IRootState,
    type TRootDispatch,
    type TReducerFn,
    ERootActionType,

    rootStore,
    persistStore,
    selectSettings,
}
