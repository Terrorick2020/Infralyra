'use client';
import { createTheme } from '@mui/material/styles';
import { InterFontVarName, CraftworkFontVarName } from '@/src/shared/config';


export const theme = createTheme({
    typography: {
        fontFamily: `var(${InterFontVarName})`,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: `var(${CraftworkFontVarName})`,
                    textTransform: 'uppercase',
                }
            }
        },
    }
});
