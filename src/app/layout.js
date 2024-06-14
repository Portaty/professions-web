import { Inter } from "next/font/google";
import "@fontsource/montserrat";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Portaty Dashboard", 
//   description: "Creado por Portaty",
// };

export default function Layout({ children }) {
  return (
    <MantineProvider>
      <ColorSchemeScript />
      <div className='font-montserrat'>
        {children}
      </div>
    </MantineProvider>
  );
}
