import './globals.css';
import Head from './head';
import { GlobalProvider } from './GlobalProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head />
      <body className='flex flex-col'>
        <GlobalProvider>
          <Header />
          <main className='flex-grow min-h-screen'>{children}</main>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
