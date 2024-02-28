/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iR7pe26T7cg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div key="1" className="bg-white">
      <header className="bg-[#1a1a1a] py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-white">COMMUNITIES</h1>
          <nav className="flex space-x-4">
            <Link className="text-white hover:text-gray-300" href="#">
              Anasayfa
            </Link>
            <Link className="text-white hover:text-gray-300" href="#">
              Topluluklar
            </Link>
            <Link className="text-white hover:text-gray-300" href="#">
              Etkinlikler
            </Link>
            <Link className="text-white hover:text-gray-300" href="#">
              Rehber
            </Link>
          </nav>
          <div className="flex space-x-2">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Giriş Yap
            </Button>
            <Button className="bg-transparent hover:bg-blue-500 text-white hover:text-white border border-blue-500">
              Kayıt Ol
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Topluluklar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Community 1</h3>
              <p className="text-gray-500">Description of Community 1</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Community 2</h3>
              <p className="text-gray-500">Description of Community 2</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Community 3</h3>
              <p className="text-gray-500">Description of Community 3</p>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <nav className="flex space-x-1">
            <Link
              className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-100"
              href="#"
            >
              {`<`}
            </Link>
            <Link
              className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-100"
              href="#"
            >
              1
            </Link>
            <Link
              className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-100"
              href="#"
            >
              2
            </Link>
            <Link
              className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-100"
              href="#"
            >
              3
            </Link>
            <Link
              className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-100"
              href="#"
            >
              {`>`}
            </Link>
          </nav>
        </section>
      </main>
      <footer className="bg-[#1a1a1a] py-4">
        <div className="container mx-auto px-6">
          <p className="text-center text-white text-sm">
            DÜSosyal © Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
