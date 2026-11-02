interface AboutSectionProps {
  onOpenBooking: (service?: string) => void
}

export function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const portraitImg =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Yk9uQx4HHU1x3V4vIAwnBREmXsGQTJEB16Xi5zNiotUdnWpAVFOmDAaDVdagzuTua4PxSGDcxbuu81Is3F6KpCbvpWthIR9foB3YLPO64VVrHuXxBExsGPDeQkcyQR6SV_lQt7J32PnLLhAcwse3AXhw8XIsk0nvnzYAfZsZFul8cRQHSan-sqAQx1cXu1VQgP230mue0-zTY-YC0fE35DKULJx9M33vnpt82tR1FVX1b7Xbn8zRfQ'

  return (
    <section
      className="w-full bg-surface-container-low py-space-xl scroll-mt-20"
      id="about-us"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="mx-auto px-margin-mobile lg:px-margin-desktop w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Portrait / Reflective Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-highest">
              <img
                className="w-full h-[520px] object-cover object-top"
                alt="Portrait of senior matrimonial consultant at Matrimonial.com in welcoming consultation sanctuary"
                src={portraitImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                <p className="font-headline-sm text-headline-sm text-white">Matrimonial.com</p>
                <p className="font-label-md text-label-md text-surface-container-high opacity-90">
                  Executive Matchmaking &amp; Family Relationship Advisory
                </p>
              </div>
            </div>
          </div>

          {/* Story / Background Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-space-md">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-md py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span className="font-label-md text-label-md text-secondary tracking-wider uppercase font-semibold">
                Master&apos;s Matrimonial Consultant &amp; Registered Family Counselor
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-tight italic">
              Bespoke Matchmaker — <span className="italic font-display-lg text-primary">Matrimonial.com</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Welcome to <strong>Matrimonial.com</strong>, the premier private matchmaking bureau based in Mayfair, London. 
              By uniting decades of professional psychological compatibility profiling with bespoke, high-discretion <strong>matrimonial matchmaking</strong>, our senior directors guide accomplished professionals and distinguished families to foster genuine, lifelong British and international marriages.
            </p>

            <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
              <button
                type="button"
                onClick={() => onOpenBooking('Initial Consultation')}
                className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg hover:bg-primary transition-all shadow-[0_12px_32px_-4px_rgba(68,54,77,0.12)] gap-space-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>Book an Initial Consultation</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking('Free 15-Minute Consultation')}
                className="inline-flex items-center justify-center bg-surface-container text-primary font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg hover:bg-surface-container-high transition-all shadow-sm border-l-4 border-secondary gap-space-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-secondary text-[18px]">phone_in_talk</span>
                <span>Free 15-Minute Consultation</span>
              </button>
            </div>

            {/* Credential Badges Highlighting Dual Foundation */}
            <div className="pt-space-md flex flex-wrap items-center gap-space-xs text-on-surface-variant">
              <span className="bg-surface-container px-3 py-1.5 rounded-full font-label-sm text-label-sm text-tertiary shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-primary">school</span>
                Master of Matrimonial Advisory
              </span>
              <span className="bg-surface-container px-3 py-1.5 rounded-full font-label-sm text-label-sm text-tertiary shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-primary">clinical_notes</span>
                Registered Family Counselor
              </span>
              <span className="bg-surface-container px-3 py-1.5 rounded-full font-label-sm text-label-sm text-tertiary shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-primary">verified</span>
                100% Verified Profiles
              </span>
              <span className="bg-surface-container px-3 py-1.5 rounded-full font-label-sm text-label-sm text-tertiary shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-primary">shield</span>
                Certified Relationship Specialist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
