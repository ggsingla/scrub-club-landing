'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const routes = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Business', href: '#business' },
  { name: 'FAQ', href: '#faq' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b ${scrolled
        ? 'border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
        : 'border-transparent bg-background'
        } transition-all duration-200`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
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
          <span className="font-signika text-xl font-bold">NoScrubs</span>
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
            <Button variant="ghost" className="text-sm font-medium">
              Sign in
            </Button>
            <Button className="text-sm font-medium group">
              Schedule Pickup
              <div className="relative ml-1">
                <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </div>
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
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/noscrubs-sq.png"
                    alt="NoScrubs Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="font-signika text-xl font-bold">NoScrubs</span>
                </Link>

                <div className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.name}
                      href={route.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary border-b border-border/10 pb-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-4 mt-auto">
                  <Button variant="outline" className="w-full">
                    Sign in
                  </Button>
                  <Button className="w-full">
                    Schedule Pickup
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar 