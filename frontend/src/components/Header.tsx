import { useState } from 'react'

interface HeaderProps {
  onOpenBooking: (service?: string) => void
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: 'rgba(9, 14, 26, 0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo - British Royal Botanical Crest */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <svg
            className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 48 48"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 40 C14 30, 22 20, 36 10" />
            <path d="M20 31 C17 26, 17 20, 22 17 C26 21, 25 27, 20 31 Z" fill="#f59e0b" fillOpacity="0.25" />
            <path d="M26 24 C27 18, 33 16, 37 19 C36 24, 30 26, 26 24 Z" fill="#f59e0b" fillOpacity="0.25" />
            <path d="M16 36 C12 33, 11 27, 15 25 C18 28, 18 33, 16 36 Z" fill="#f59e0b" fillOpacity="0.25" />
            <path d="M31 16 C33 11, 39 10, 42 13 C41 17, 36 19, 31 16 Z" fill="#f59e0b" fillOpacity="0.25" />
          </svg>
          <div className="flex flex-col">
            <span
              className="font-headline-md italic text-[22px] sm:text-[26px] text-white tracking-tight leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Matrimonial.com
            </span>
            <span className="font-label-sm text-[9.5px] text-amber-300/90 tracking-[0.24em] uppercase mt-1 font-semibold">
              UK &amp; International Matchmaking Bureau • London
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-7" style={{ background: 'transparent' }}>
            <a
              href="#"
              className="relative text-[14.5px] font-medium text-white hover:text-amber-300 transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-400"
            >
              Home
            </a>
            <a
              href="#engaged-pairs"
              className="text-[14.5px] font-medium text-slate-200 hover:text-amber-300 transition-colors py-1 flex items-center gap-1.5"
            >
              <span>Engaged Couples</span>
              <span className="bg-amber-400 text-stone-950 text-[10px] font-bold px-1.5 py-0.2 rounded-full">New</span>
            </a>
            <a
              href="#browse-matches"
              className="text-[14.5px] font-medium text-slate-200 hover:text-amber-300 transition-colors py-1"
            >
              Curated Profiles
            </a>
            <a
              href="#about-us"
              className="text-[14.5px] font-medium text-slate-200 hover:text-amber-300 transition-colors py-1"
            >
              About the Bureau
            </a>
            <a
              href="#contact-section"
              className="text-[14.5px] font-medium text-slate-200 hover:text-amber-300 transition-colors py-1"
            >
              Contact Mayfair
            </a>
          </nav>
          <button
            onClick={() => onOpenBooking('Confidential Membership Consultation')}
            className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-[14px] px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-amber-500/25 gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>Apply for Membership</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => onOpenBooking('Confidential Membership Consultation')}
            className="bg-amber-400 text-stone-950 font-bold text-xs px-3.5 py-2 rounded-full"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0e1629] px-6 py-4 space-y-3 shadow-2xl">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-white py-2"
          >
            Home
          </a>
          <a
            href="#engaged-pairs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-slate-200 hover:text-amber-300 py-2"
          >
            Engaged Couples (Success Stories)
          </a>
          <a
            href="#browse-matches"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-slate-200 hover:text-amber-300 py-2"
          >
            Curated Member Portfolios
          </a>
          <a
            href="#about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-slate-200 hover:text-amber-300 py-2"
          >
            About the Bureau
          </a>
          <a
            href="#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-slate-200 hover:text-amber-300 py-2"
          >
            Contact Mayfair Office
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenBooking('Confidential Membership Consultation')
            }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-[14px] py-2.5 rounded-full mt-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>Apply for Private Membership</span>
          </button>
        </div>
      )}
    </header>
  )
}
