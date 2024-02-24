import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
