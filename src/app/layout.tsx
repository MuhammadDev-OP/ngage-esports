import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Barlow, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";
import ToasterProvider from "./providers/ToastProvider";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import { UserProvider } from "./context/UserContext";
import Head from "next/head";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "300",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Ngage Esports",
  description:
    "No one knows how to define “esports” better than professional gamers themselves.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)", //Right Now we using same logo for dark
        url: "/ngage-logo.svg",
        href: "/ngage-logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/ngage-logo.svg",
        href: "/ngage-logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Ngage Esports</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="esports, gaming, professional gamers, tournaments"
        />
        <meta name="author" content="Ngage Esports" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />

        <meta name="twitter:description" content={metadata.description} />

        <link rel="icon" href="/ngage-logo.svg" type="image/svg+xml" />
      </Head>
      <body className={openSans.className}>
        <UserProvider>
          <ToasterProvider />
          <Header />
          <RegisterModal />
          <LoginModal />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
