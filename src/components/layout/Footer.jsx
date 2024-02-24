import Link from "next/link";
import { Button } from "../ui/button";

export default function FooterComponent() {
  return (
    <footer className="inset-x-0 top-0 z-50 border-t bg-gray-900">
      <div className="container flex items-center text-white text-sm text-center text-gray-400 justify-center h-14 px-4 md:px-6">
        DÜSosyal &copy; Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
