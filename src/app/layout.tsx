import "./globals.css";

export const metadata = {
  title: "Type Todo",
  description: "Simple todo list app.",
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
