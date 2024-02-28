import Link from "next/link";
import HomeLayout from "@/src/components/layout/HomeLayout";
import { Button } from "@/src/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
  CardContent,
  Card,
} from "@/src/components/ui/card";

export default function Home() {
  return (
    <HomeLayout className="space-y-8">
      <section className="flex items-center justify-center lg:justify-between">
        <div className="max-w-lg space-y-4 flex flex-col">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 text-center lg:text-left">
            Topluluğunuzu Oluşturun ve Yönetin
          </h1>
          <p className="text-center lg:text-left">
            DÜSosyal, topluluklarınızı oluşturmanıza ve yönetmenize yardımcı
            olur. Ücretsizdir ve her zaman öyle kalacaktır.
          </p>
          <div className="flex flex-row justify-center lg:justify-start space-x-4">
            <Button asChild>
              <Link href="/communities/create">Topluluk Oluştur</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">İletişime Geçin</Link>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 lg:block hidden">
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
      <section className="flex flex-col items-center space-y-4">
        <div className="flex flex-row w-full justify-between">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">
            Etkinlikler
          </h2>
          <Button asChild variant="outline">
            <Link href="/events">Tümünü Gör</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card>
              <CardHeader className="p-0">
                <img
                  alt="Hero illustration"
                  className="h-auto w-full max-w-lg"
                  height="150"
                  src="/assets/images/auth-layout-image.jpg"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />
              </CardHeader>
              <CardContent className="pt-6 space-y-2">
                <CardTitle asChild>
                  <Link href="/events/1">Devfest Google 23-24</Link>
                </CardTitle>
                <CardDescription>
                  GDG ve GDSC tarafından düzenlenen Devfest etkinliği.
                </CardDescription>
                <Button asChild variant="outline">
                  <Link href="/events/1">Katıl</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center space-y-4">
        <div className="flex flex-row w-full justify-between">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">
            Topluluklar
          </h2>
          <Button asChild variant="outline">
            <Link href="/communities">Tümünü Gör</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card className="flex flex-row">
              <CardHeader className="p-0">
                <img
                  alt="Hero illustration"
                  className="h-32 w-64"
                  height="50"
                  width="50"
                  src="/assets/images/auth-layout-image.jpg"
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                  }}
                />
              </CardHeader>
              <CardContent className="pt-6 space-y-2">
                <CardTitle asChild>
                  <Link href="/events/1">GDSC Düzce</Link>
                </CardTitle>
                <CardDescription className="p-0">
                  Google Developer Students Club Düzce Üniversitesi
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </HomeLayout>
  );
}
