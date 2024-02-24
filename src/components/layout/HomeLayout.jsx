import HeaderComponent from "./Header";

export default function HomeLayout({ children }) {
  return (
    <div>
      <HeaderComponent />
      {children}
      <footer>footer content</footer>
    </div>
  );
}
