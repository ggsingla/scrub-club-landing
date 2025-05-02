'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'

const routes = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Business', href: '#business' },
  { name: 'FAQ', href: '#faq' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="mr-8 flex items-center gap-2">
          <Image
            src="/noscrubs-sq.png"
            alt="NoScrubs Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-signika text-xl font-bold">Scrub Club</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">
              Sign in
            </Button>
            <Button className="text-sm">
              Schedule Pickup
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-4">
                {routes.map((route) => (
                  <Link
                    key={route.name}
                    href={route.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="ghost" className="text-sm">
                    Sign in
                  </Button>
                  <Button className="text-sm">
                    Schedule Pickup
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Navbar 