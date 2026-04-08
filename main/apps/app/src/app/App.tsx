import { StoreProvider, MuiProvider } from './provider';
import { DefaultLayout } from './layout';
import type { TClearProps } from '@/src/shared/type';

import './style/index.scss';


export default function App({children}: TClearProps) {
    return (
        <StoreProvider>
            <MuiProvider>
                <DefaultLayout>
                    {children}
                </DefaultLayout>
            </MuiProvider>
        </StoreProvider>
    );
}
