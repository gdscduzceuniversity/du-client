import { cn } from "@/src/lib/utils";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

export default function HomeLayout({ children, className }) {
  return (
    <>
      <HeaderComponent />
      <main className={cn("container p-4 md:p-6", className)}>{children}</main>
      <FooterComponent />
    </>
  );
}
