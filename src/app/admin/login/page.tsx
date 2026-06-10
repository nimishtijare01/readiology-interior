"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    // If already logged in, redirect to admin dashboard
    const isLogged = localStorage.getItem("admin_session") === "true";
    if (isLogged) {
      router.push("/admin");
    }
  }, [router]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === "nimish" && password === "nimish") {
      localStorage.setItem("admin_session", "true");
      router.push("/admin");
    } else {
      setError("Invalid credentials");
      setIsPending(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] px-4">
      <div className="absolute inset-0 bg-[#F5F3EB] -z-20" />
      <div
        className="absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      
      <div className="w-full max-w-md bg-white p-10 md:p-14 border border-border/60 shadow-2xl shadow-black/5">
        <div className="text-center mb-10">
          <div className="font-serif font-semibold text-2xl tracking-widest uppercase mb-2 text-foreground">
            Readiology<span className="text-primary">.</span>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Admin Portal
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-xs uppercase tracking-widest font-light text-foreground/80">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              required
              className="rounded-none border-border focus-visible:ring-primary h-12 bg-[#FDFBF7]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-xs uppercase tracking-widest font-light text-foreground/80">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="rounded-none border-border focus-visible:ring-primary h-12 bg-[#FDFBF7]"
            />
          </div>

          {error && (
            <div className="text-destructive text-sm font-light text-center">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-12 rounded-none bg-foreground text-background hover:bg-foreground/90 uppercase tracking-widest text-xs transition-colors mt-4"
          >
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
