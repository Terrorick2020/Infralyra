import { InterFontVarName, CraftworkFontVarName } from '@/src/shared/config';
import type { TClearProps } from '@/src/shared/type';

import localFont from 'next/font/local';
import App from '@/src/app/App';


const interFont = localFont({
  src: [
    {
      path: '../public/fonts/Inter/InterVariable-latin.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter/InterVariable-cyrillic.woff2',
      style: 'normal',
    },
  ],
  variable: InterFontVarName,
  display: 'optional',
});

const craftworkFont = localFont({
  src: [
    {
      path: '../public/fonts/CraftworkGrotesk/CraftworkGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/CraftworkGrotesk/CraftworkGrotesk-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/CraftworkGrotesk/CraftworkGrotesk-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/CraftworkGrotesk/CraftworkGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/CraftworkGrotesk/CraftworkGrotesk-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: CraftworkFontVarName,
  display: 'swap',
});

export default function RootLayout({children}: TClearProps) {
  return (
    <html 
      lang="ru"
      id="dark"
      className={`${interFont.variable} ${craftworkFont.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <title>Infralyra</title>
      </head>
      <body>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}
