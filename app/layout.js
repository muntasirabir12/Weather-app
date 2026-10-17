import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "SkyNow – Simple Weather App",
  description: "Live weather powered by Open-Meteo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
