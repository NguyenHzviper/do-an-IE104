'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '../../redux/store';



export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    // const isDark = false
    const isDark = false
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>

                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    {children}

                </PersistGate>
            </Provider>


        </NextAppDirEmotionCacheProvider>
    );
}