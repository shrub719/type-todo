import "./globals.css";

export const metadata = {
  title: "todo",
  description: "Simple todo app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
