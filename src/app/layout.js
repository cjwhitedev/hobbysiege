import "./globals.css";
import Header from "./_partials/header";
import Footer from "./_partials/footer";

export const metadata = {
  title: "blea.cc",
  description: "The future is blea.cc/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}