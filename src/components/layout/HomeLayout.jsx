import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      <main className="container p-4 md:p-6">{children}</main>
      <FooterComponent />
    </>
  );
}
