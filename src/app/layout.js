import "./globals.css";

export const metadata = {
  title: "Oracle Final Project",
  description: "Filip Altankov/Maximilian Giroux Davis project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
