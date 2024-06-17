import { Inter } from "next/font/google";
import "@fontsource/montserrat";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <ColorSchemeScript />
          <div className="font-montserrat">{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
