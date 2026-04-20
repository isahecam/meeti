import Link from "next/link"

import { MeetiLogo } from "~/shared/components/layout/meeti-logo"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Link href="/" className="outline-none">
          <MeetiLogo />
        </Link>
      </div>
      <main className="mx-auto max-w-2xl px-5 py-16">{children}</main>
    </>
  )
}
