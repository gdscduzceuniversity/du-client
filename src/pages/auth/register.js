import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Button } from "@/src/components/ui/button";
import AuthLayout from "@/src/views/pages/auth/auth-layout";

const loginSchema = z.object({
  name_surname: z
    .string()
    .min(3, {
      message: "Adınız en az 3 karakter olmalıdır",
    })
    .max(50, {
      message: "Adınız en fazla 50 karakter olmalıdır",
    }),
  email: z.string().email({
    message: "Lütfen geçerli bir e-posta adresi giriniz",
  }),
  password: z.string().min(8, {
    message: "Şifreniz en az 8 karakter olmalıdır",
  }),
  terms: z.boolean().optional(),
});

const RegisterPage = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name_surname: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center">
        <h1 className="mb-2">👋 Aramıza katıl</h1>
        <p className="mb-4">Toplulukları keşfedin.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name_surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ad Soyad</FormLabel>
                  <FormControl>
                    <Input placeholder="Adınız ve soyadınız" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-posta adresi</FormLabel>
                  <FormControl>
                    <Input placeholder="E-posta adresinizi girin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Şifre</FormLabel>
                  <FormControl>
                    <Input placeholder="Şifrenizi girin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex justify-center items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-primary font-normal">
                      Topluluk Kuralları ve Gizlilik Politikasını okudum kabul
                      ediyorum.
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Kayıt Ol
            </Button>
          </form>
        </Form>
        <div className="flex items-center justify-center space-x-2 my-4">
          <p className="text-sm">Hesabınız var mı?</p>
          <Link
            href="/auth/login"
            className="text-primary hover:underline text-sm"
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
