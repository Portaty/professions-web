import { Inter } from "next/font/google";
import "@fontsource/montserrat";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import '../styles/globals.css'

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portaty Dashboard",
  description: "Creado por Portaty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      {/* <body className={inter.className}> */}
      <body className='font-montserrat'>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
