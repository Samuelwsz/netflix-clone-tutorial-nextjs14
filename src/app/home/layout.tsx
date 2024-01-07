import { authOptions } from "@/app/utils/auth"
import NavBar from "@/components/NavBar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

export default async function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/login")
  }

  return (
    <>
      <NavBar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  )
}
