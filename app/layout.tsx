import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ActiveSectionContextProvider from '@/context/active-section';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TimCo | Portfolio Page',
  description: 'Tim Conway is a front end developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-300 text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="opacity-40 bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-full w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:opacity-0"></div>
        <div className="opacity-40 bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-full w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:opacity-0"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
