import "./globals.css";

export const metadata = {
  title: "Hair Lounge",
  description: "Hair Lounge Barbershop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
