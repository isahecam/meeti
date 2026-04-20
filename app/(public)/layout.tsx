import { Header } from "~/shared/components/layout/header"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
