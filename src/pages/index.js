import Link from "next/link";
import HomeLayout from "../components/layout/HomeLayout";
import { Button } from "../components/ui/button";
export default function Home() {
  return (
    <HomeLayout>
      <section className="flex items-center justify-between">
        <div className="max-w-lg space-y-4 flex flex-col">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Topluluğunuzu Oluşturun ve Yönetin
          </h1>
          <p>
            DÜSosyal, topluluklarınızı oluşturmanıza ve yönetmenize yardımcı
            olur. Ücretsizdir ve her zaman öyle kalacaktır.
          </p>
          <div className="flex flex-row space-x-4">
            <Button asChild>
              <Link href="/communities/create">Topluluk Oluştur</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">İletişime Geçin</Link>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            alt="Hero illustration"
            className="h-auto w-full max-w-lg rounded-lg"
            height="300"
            src="/assets/images/auth-layout-image.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
      </section>
    </HomeLayout>
  );
}
