"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Footer from "@/app/_components/Shared/Footer"
import Link from "next/link"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  })

  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/",
      redirect: false,
    })

    if (!res?.ok) {
      toast.error(res?.error)
    } else {
      toast.success("Login successfully")
      router.replace("/")
    }
  }

  return (
    <>
      <section className="flex items-center justify-center min-h-[80vh] bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Login to Your Account
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="***************"
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Register Link */}
              <p className="text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-600 hover:underline">
                  Register
                </Link>
              </p>

              {/* Submit */}
              <Button type="submit" className="w-full py-3 mt-4 bg-black text-white hover:bg-gray-800 transition">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </section>
      <Footer />
    </>
  )
}