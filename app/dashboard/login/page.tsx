"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PASSWORD, setAuth } from "@/lib/auth"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.trim() === PASSWORD) {
      setAuth()
      router.push("/dashboard")
    } else {
      setError("Incorrect password. Try again.")
      setPassword("")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <div className="rounded-[20px] bg-card p-8 shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Lock size={20} className="text-muted-foreground" />
          </div>
          <h1 className="mt-5 text-center text-xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Enter the password to access the dashboard.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
                autoFocus
                className="rounded-xl text-center"
              />
              {error && <p className="text-center text-xs text-destructive">{error}</p>}
            </div>
            <Button type="submit" className="w-full rounded-xl">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
