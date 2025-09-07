import React from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
  YoutubeIcon,
} from '@heroicons/react/24/outline'

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: FacebookIcon },
  { href: 'https://instagram.com', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://twitter.com', label: 'X', icon: TwitterIcon },
  { href: 'https://github.com', label: 'GitHub', icon: GithubIcon },
  { href: 'https://youtube.com', label: 'YouTube', icon: YoutubeIcon },
]

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Blog' },
  { href: '#jobs', label: 'Jobs' },
  { href: '#press', label: 'Press' },
  { href: '#accessibility', label: 'Accessibility' },
  { href: '#partners', label: 'Partners' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <nav className="flex justify-center space-x-8 mb-6 text-sm">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="hover:text-gray-200 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
