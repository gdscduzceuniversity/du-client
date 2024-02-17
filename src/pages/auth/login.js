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
  email: z.string().email({
    message: "error.invalid_email",
  }),
  password: z.string().min(8, {
    message: "error.min_length",
  }),
  remember: z.boolean().optional(),
});

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center">
        <h1 className="mb-2">👋 Hoş geldiniz</h1>
        <p className="mb-4">Toplulukları keşfedin.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex justify-center items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-primary font-normal">
                      Beni hatırla
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Link
                href="/auth/forgot-password"
                className="text-muted hover:underline text-sm"
              >
                Şifremi unuttum
              </Link>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Giriş Yap
            </Button>
          </form>
        </Form>
        <div className="flex items-center justify-center space-x-2 my-4">
          <p className="text-sm">Hesabınız yok mu?</p>
          <Link
            href="/auth/register"
            className="text-primary hover:underline text-sm"
          >
            Kayıt ol
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
