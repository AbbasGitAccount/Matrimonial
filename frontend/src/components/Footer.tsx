interface FooterProps {
  onOpenBooking: (service?: string) => void
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer
      className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-md mx-auto"
      style={{
        paddingTop: '140px',
        marginBottom: '0px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="mx-auto px-margin-mobile lg:px-margin-desktop w-full" style={{ paddingTop: '100px' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-space-lg items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ position: 'relative', top: '0px' }}
        >
          {/* Col 1 */}
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight block leading-tight">
                  Matrimonial.com
                </span>
                <span className="font-label-sm text-[11px] text-tertiary uppercase tracking-wider block">
                  Matrimonial Matchmaking &amp; Family Counseling
                </span>
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              Compassionate family advisory expertise united with relational matrimonial matchmaking for individuals, couples, and esteemed family systems.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                aria-label="Website"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">link</span>
              </a>
              <a
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm"
                href="#contact-section"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
              <a
                aria-label="Community"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div style={{ position: 'relative' }}>
            <h4 className="font-title-md text-[16px] text-on-surface font-semibold mb-space-sm">
              Navigation
            </h4>
            <ul className="space-y-2 text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#engaged-pairs">
                  Recently Engaged Couples
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#browse-matches">
                  Curated Member Portfolios
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#about-us">
                  About the Bureau
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#contact-section">
                  Contact Mayfair
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Initial Consultation')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Book a Private Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-title-md text-[16px] text-on-surface font-semibold mb-space-sm">
              Mayfair Bureau
            </h4>
            <ul className="space-y-2 text-body-sm text-on-surface-variant">
              <li>
                <span className="font-label-sm text-on-surface font-semibold block">
                  London Headquarters
                </span>
                14 Berkeley Square, Mayfair
                <br />
                London W1J 6BD, United Kingdom
              </li>
              <li className="pt-1">
                <span className="font-label-sm text-on-surface font-semibold block">Consultations</span>
                Mon – Fri:&nbsp;
                <span className="inline-block">By Strict Appointment</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-title-md text-[16px] text-on-surface font-semibold mb-space-sm">
              Contact Us
            </h4>
            <div className="space-y-space-xs font-body-sm text-on-surface-variant">
              <a
                className="flex items-center gap-2 hover:text-primary transition-colors"
                href="tel:+442079460912"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                  call
                </span>
                <span>+44 (0)20 7946 0912</span>
              </a>
              <a
                className="flex items-center gap-2 hover:text-primary transition-colors"
                href="mailto:advisory@matrimonial.com"
              >
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                  mail
                </span>
                <span className="truncate">advisory@matrimonial.com</span>
              </a>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Online Schedule')}
                  className="inline-flex items-center gap-1 text-label-sm text-primary hover:text-on-surface transition-colors font-medium cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                  <span>Schedule Online</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-space-md pb-space-xs border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm justify-center w-full"
          style={{ marginTop: '0px', paddingTop: '24px', textAlign: 'center', position: 'relative', top: '0px' }}
        >
          <p className="text-body-sm text-on-surface-variant text-center w-full" style={{ position: 'relative', top: '0px' }}>
            © Copyright 2026 Matrimonial.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
