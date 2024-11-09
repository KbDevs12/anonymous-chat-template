import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from "next/navigation";
import { routing } from "@/routing";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }];
}

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Anonymous Chat",
  description: "template of anonymous chat using socket.io",
};

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    if (!routing.locales.includes(locale)) {
        notFound();
      }

      setRequestLocale(locale);

      const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
