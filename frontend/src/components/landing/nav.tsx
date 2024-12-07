import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scale } from "lucide-react";
import { ModeToggle } from "@/components/landing/mode-toggle";

export function Nav() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">EquiRightsAI</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#impact"
          >
            Impact
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#about"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] mr-2"
            />
          </div>
          <ModeToggle />
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}
