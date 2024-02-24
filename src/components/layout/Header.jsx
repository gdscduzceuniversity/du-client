import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function HeaderComponent() {
  return (
    <header className="inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-900">
      <div className="container flex items-center justify-between h-14 px-4 md:px-6">
        <Link className="font-semibold text-base md:text-lg" href="#">
          DÜ<span className="font-medium">Social</span>
        </Link>
        <nav className="flex items-center space-x-2">
          <Button
            asChild
            variant="ghost"
            className="text-gray-600 dark:text-gray-100"
          >
            <Link href="/">Anasayfa</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-gray-600 dark:text-gray-100"
          >
            <Link href="/communities">Topluluklar</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-gray-600 dark:text-gray-100"
          >
            <Link href="/events">Etkinlikler</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-gray-600 dark:text-gray-100"
          >
            <Link href="/guide">Rehber</Link>
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link href="/auth/login">Giriş Yap</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/auth/register">Kayıt Ol</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
