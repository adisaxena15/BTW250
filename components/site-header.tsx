"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { CUFoodBoxLogo } from "./cufoodbox-logo"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <CUFoodBoxLogo className="w-10 h-10" />
              <span className="text-xl font-bold text-primary">CUFoodBox</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Who We Are
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link href="/impact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Impact
            </Link>
            <Link
              href="/get-involved"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Get Involved
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/contact">Request a Food Box</Link>
            </Button>
            <Button asChild className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              <Link href="/get-involved#donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              href="/"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link
              href="/how-it-works"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/impact"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              href="/get-involved"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Button asChild variant="outline" className="w-full border-primary text-primary bg-transparent">
                <Link href="/contact">Request a Food Box</Link>
              </Button>
              <Button asChild className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <Link href="/get-involved#donate">Donate</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
