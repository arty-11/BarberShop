//stylesheets
import "./globals.css";

//components
import Navbar from "./components1/navbar/navbar";


export const metadata = {
  title: "Hair Lounge",
  description: "Hair Lounge Barbershop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
