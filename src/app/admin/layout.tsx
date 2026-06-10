"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isLogged = localStorage.getItem("admin_session") === "true";
    if (!isLogged) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_session");
    router.push("/admin/login");
  };

  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="text-xs tracking-widest uppercase text-muted-foreground animate-pulse">
          Verifying Session...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans">
      <header className="w-full border-b border-border bg-white px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="font-serif font-semibold text-xl tracking-widest uppercase text-foreground">
            Readiology<span className="text-primary">.</span>
          </div>
          <span className="text-xs tracking-widest uppercase text-muted-foreground border-l border-border pl-4 hidden md:block">
            Dashboard
          </span>
        </div>
        
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
