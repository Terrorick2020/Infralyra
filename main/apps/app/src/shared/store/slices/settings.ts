import {
    createSlice,
    createAsyncThunk,
    type PayloadAction,
} from '@reduxjs/toolkit'

import { type ISettingsState, EThemes } from './types';


const initialState: ISettingsState = {
    theme: EThemes.Dark,
    pcapName: undefined,
    userName: undefined,
}

const settingsSliceName = 'settings';

const settingsSlice = createSlice({
    name: settingsSliceName,
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<EThemes>) => {
            state.theme = action.payload;
        },
        setPcapName: (state, action: PayloadAction<string | undefined>) => {
            state.pcapName = action.payload;
        },
        setUserName: (state, action: PayloadAction<string | undefined>) => {
            state.userName = action.payload;
        },
    },
    extraReducers: (_builder) => {},
})

export const { setTheme, setPcapName, setUserName } = settingsSlice.actions
export { settingsSliceName }
export default settingsSlice.reducer
