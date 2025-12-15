import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { theme } from '@/src/app/provider/Mui/models/theme';
import { ThemeProvider } from '@mui/material/styles';
import type { TClearProps } from '@/src/shared/type';


export function MuiProvider({children}: TClearProps) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}
