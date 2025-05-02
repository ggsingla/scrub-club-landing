'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr,1fr,1fr] lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/noscrubs-sq.png"
                alt="NoScrubs Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-signika text-xl font-bold">NoScrubs.io</span>
            </Link>
            <p className="text-muted-foreground">
              NoScrubs delivers affordable, ultra-fast laundry service, with clothes returned in just 4 hours.
              We make your life simpler by taking care of all your laundry needs!
            </p>
            <Button variant="outline" className="group">
              <MessageCircle className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Chat with us
            </Button>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-signika text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact us</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Cities Links */}
          <div className="space-y-4">
            <h3 className="font-signika text-lg font-semibold">Cities</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/austin" className="hover:text-primary transition-colors">Austin</Link>
              </li>
              <li>
                <Link href="/houston" className="hover:text-primary transition-colors">Houston</Link>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div className="space-y-4">
            <h3 className="font-signika text-lg font-semibold">About Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">Working at No Scrubs</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-primary transition-colors">How it works</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary transition-colors">Customer testimonials</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-8 text-muted-foreground sm:flex-row">
          <p>© 2025 NoScrubs Laundry</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/pricing" className="hover:text-primary transition-colors">
              Pricing Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 