import "./globals.css";

export const metadata = {
  title: "Happy Birthday Valen ❤️",
  description: "A birthday page made with love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
