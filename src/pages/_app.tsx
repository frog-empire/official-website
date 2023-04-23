import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const AppContent = ({ children }: any) => (
  <div className="flex flex-col">
    <Header />
    <div className="w-full">{children}</div>
    <Footer />
  </div>
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContent>
      <Component {...pageProps} />
    </AppContent>
  );
}
