import Link from "next/link"

import { MeetiLogo } from "~/shared/components/layout/meeti-logo"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="mx-auto flex h-dvh max-w-2xl flex-col items-center justify-center gap-8">
      <Link href="/" className="outline-none">
        <MeetiLogo />
      </Link>
      {children}
    </main>
  )
}
