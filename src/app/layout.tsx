import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../css/main.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { createIconsTypes } from '@/utils/createIcons';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  // openGraph: {
  //   title: 'Tap4Change donor',
  //   description:
  //     'Aplicacion para donar a caridades de todo el mundo con una amplia seleccion.',
  //   locale: 'es_AR',
  //   type: 'website',
  //   images: [
  //     {
  //       url: '<https://res.cloudinary.com/damjxqb5f/image/upload/v1704225504/avatar_7_ftmrh8.png>',
  //       width: 800,
  //       height: 600,
  //       alt: 'CSS Wiki - Recursos para dominar CSS',
  //     },
  //     {
  //       url: '<https://res.cloudinary.com/damjxqb5f/image/upload/v1704225504/avatar_7_ftmrh8.png>',
  //       width: 1800,
  //       height: 1600,
  //       alt: 'CSS Wiki - Recursos para dominar CSS',
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  createIconsTypes();
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://wallet-stellar.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tap4Change donor" />
        <meta
          property="og:description"
          content="Aplicacion para donar a caridades de todo el mundo con una amplia seleccion."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/damjxqb5f/image/upload/v1704225504/avatar_7_ftmrh8.png"
        />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className={`${inter.className} body`}>
        <Header />
        <div className="body__children">
          <ToastContainer />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
