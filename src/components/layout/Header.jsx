import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/components/ui/drawer";

const MenuItemsComponent = ({ navClassNames, buttonClassNames, children }) => {
  return (
    <nav className={navClassNames}>
      <Button asChild variant="ghost" className={buttonClassNames}>
        <Link href="/">Anasayfa</Link>
      </Button>
      <Button asChild variant="ghost" className={buttonClassNames}>
        <Link href="/communities">Topluluklar</Link>
      </Button>
      <Button asChild variant="ghost" className={buttonClassNames}>
        <Link href="/events">Etkinlikler</Link>
      </Button>
      <Button asChild variant="ghost" className={buttonClassNames}>
        <Link href="/guide">Rehber</Link>
      </Button>
      {children}
    </nav>
  );
};

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-900">
      <div className="container flex items-center justify-between h-14 px-4 md:px-6">
        <Link className="font-semibold text-base md:text-lg" href="#">
          DÜ<span className="font-medium">Social</span>
        </Link>
        <MenuItemsComponent
          navClassNames="flex items-center space-x-2 md:block hidden"
          buttonClassNames="text-gray-600 dark:text-gray-100"
        />
        <div className="flex items-center space-x-4 md:block hidden">
          <Button asChild>
            <Link href="/auth/login">Giriş Yap</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/auth/register">Kayıt Ol</Link>
          </Button>
        </div>
        <Drawer>
          <DrawerTrigger asChild className="md:hidden flex">
            <Button variant="outline" size="icon">
              <MenuIcon size={18} className="text-gray-600" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <MenuItemsComponent
              navClassNames="flex flex-col items-center p-8 space-y-2"
              buttonClassNames="sm:w-[50%] w-full"
            >
              <Button asChild className="sm:w-[50%] w-full">
                <Link href="/auth/login">Giriş Yap</Link>
              </Button>
              <Button asChild className="sm:w-[50%] w-full">
                <Link href="/auth/register">Kayıt Ol</Link>
              </Button>
            </MenuItemsComponent>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
