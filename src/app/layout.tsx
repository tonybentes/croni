import 'src/global.css';

// ----------------------------------------------------------------------

import type { Viewport } from 'next';

import Head from 'next/head';

import { AlertProvider } from 'src/hooks/use-alert';

import { CONFIG } from 'src/config-global';
import { primary } from 'src/theme/core/palette';
import { LocalizationProvider } from 'src/locales ';
import { ThemeProvider } from 'src/theme/theme-provider';
import { getInitColorSchemeScript } from 'src/theme/color-scheme-script';

import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { detectSettings } from 'src/components/settings/server';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

import { AuthProvider } from 'src/auth/context/jwt';

// ----------------------------------------------------------------------

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const settings = CONFIG.isStaticExport ? defaultSettings : await detectSettings();

  return (
    <html lang="en" suppressHydrationWarning translate="no">
      <Head>
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        {getInitColorSchemeScript}
        <LocalizationProvider>
          <AuthProvider>
            <SettingsProvider
              settings={settings}
              caches={CONFIG.isStaticExport ? 'localStorage' : 'cookie'}
            >
              <ThemeProvider>
                <AlertProvider>
                  <MotionLazy>
                    <ProgressBar />
                    <SettingsDrawer />
                    {children}
                  </MotionLazy>
                </AlertProvider>
              </ThemeProvider>
            </SettingsProvider>
          </AuthProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
