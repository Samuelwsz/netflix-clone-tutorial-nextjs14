"use client"

import { GithubIcon } from "lucide-react"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

export default function GithubSignInButton() {
  return (
    <Button variant="outline" size="icon">
      <GithubIcon onClick={() => signIn("github")} className="w-4 h-4" />
    </Button>
  )
}
