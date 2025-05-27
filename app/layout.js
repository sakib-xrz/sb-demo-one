import "@css/bootstrap.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/style.css";
import "@css/aos.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark-version">{children}</body>
    </html>
  );
}
