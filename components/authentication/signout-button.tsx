'use client'
import { signOut } from "@/auth"

export function SignOutButton() {
  return (
    <form
      action={async () => {
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}