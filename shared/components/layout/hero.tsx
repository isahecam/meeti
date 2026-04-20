import Link from "next/link"

import { buttonVariants } from "~/shared/components/ui/button"

export default function Hero() {
  return (
    <section className="flex h-[600px] items-center justify-center bg-hero bg-cover bg-center">
      <div className="flex max-w-2xl flex-col items-center justify-center space-y-5">
        <h1 className="text-center text-3xl font-black text-white uppercase lg:text-4xl">
          Encuentra Un Meeti o Crea una Comunidad para compartir lo que más te gusta
        </h1>
        <Link className={buttonVariants({ variant: "default", size: "lg" })} href="/auth/create-account">
          Obtener una cuenta
        </Link>
      </div>
    </section>
  )
}
