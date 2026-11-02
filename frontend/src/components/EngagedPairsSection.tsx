import { useState } from 'react'

export interface EngagedPair {
  id: string
  coupleNames: string
  groomName: string
  brideName: string
  engagedDate: string
  weddingDate: string
  location: string
  groomRole: string
  brideRole: string
  story: string
  ringCeremonyCity: string
  imageUrl: string
  community: string
  daysToMatch: number
}

const ENGAGED_PAIRS: EngagedPair[] = [
  {
    id: '1',
    coupleNames: 'William & Victoria',
    groomName: 'William Sterling-Fox',
    brideName: 'Victoria St. Clair',
    engagedDate: 'October 14, 2026',
    weddingDate: 'Summer 2027',
    location: 'Kensington, London & Cotswolds',
    groomRole: 'Partner, Magic Circle Law Firm (Oxford BA)',
    brideRole: 'Senior Conservation Architect (Cambridge MPhil)',
    story:
      'We both sought a life partner dedicated to cultural depth, shared intellectual curiosity, and traditional British family values. Matrimonial.com’s Mayfair director personally arranged our first meeting over afternoon tea in St. James’s. William proposed during a countryside walk in Gloucestershire.',
    ringCeremonyCity: 'Gloucestershire & London',
    community: 'Law & Architecture • London',
    daysToMatch: 46,
    imageUrl:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '2',
    coupleNames: 'James & Dr. Claire',
    groomName: 'James Montagu-Evans',
    brideName: 'Dr. Claire Ashworth',
    engagedDate: 'September 20, 2026',
    weddingDate: 'Spring 2027',
    location: 'Chelsea, London & Edinburgh',
    groomRole: 'Managing Director, Private Equity (LSE)',
    brideRole: 'Consultant Neurologist (Guy’s & St Thomas’)',
    story:
      'Total discretion was essential for our careers. Our Matchmaking Director conducted an in-depth values evaluation before presenting our profiles. We instantly bonded over classical literature and weekend rowing. We announced our engagement overlooking the Thames in Chelsea.',
    ringCeremonyCity: 'Chelsea, London',
    community: 'Finance & Medicine • London',
    daysToMatch: 58,
    imageUrl:
      'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '3',
    coupleNames: 'Harry & Camilla',
    groomName: 'Harry Buchanan',
    brideName: 'Camilla FitzGerald',
    engagedDate: 'August 18, 2026',
    weddingDate: 'December 2026',
    location: 'Edinburgh & Mayfair, London',
    groomRole: 'Founder, Clean Infrastructure Enterprise',
    brideRole: 'Senior Specialist, Fine Arts (Courtauld Institute)',
    story:
      'Dividing time between Scotland and London made finding a true life partner difficult. The bureau bridged geography seamlessly with dignified introductions. Harry proposed overlooking the Scottish Highlands on an autumn weekend.',
    ringCeremonyCity: 'Edinburgh & London',
    community: 'Enterprise & Fine Art • UK',
    daysToMatch: 35,
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '4',
    coupleNames: 'Edward & Beatrice',
    groomName: 'Edward Cavendish',
    brideName: 'Beatrice Howard',
    engagedDate: 'July 25, 2026',
    weddingDate: 'April 2027',
    location: 'Richmond, Surrey & Cambridge',
    groomRole: 'Partner, European Technology Venture Fund',
    brideRole: 'Head of Curatorial, Royal Heritage Trust',
    story:
      'We desired an introduction grounded in mutual intellectual respect, emotional maturity, and shared lifestyle pursuits. Our matchmaker provided impeccable guidance, and we exchanged rings in Richmond Park surrounded by our families.',
    ringCeremonyCity: 'Surrey & Cambridge',
    community: 'Venture & Heritage • Surrey',
    daysToMatch: 42,
    imageUrl:
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=700&q=80',
  },
]

export function EngagedPairsSection() {
  const [activeStory, setActiveStory] = useState<EngagedPair | null>(null)

  return (
    <section id="engaged-pairs" className="w-full py-20 bg-surface relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-fixed/50 px-4 py-1.5 rounded-full mb-3 border border-secondary/20 shadow-xs">
            <span className="material-symbols-outlined text-[18px] text-secondary">
              volunteer_activism
            </span>
            <span className="font-label-sm text-secondary tracking-widest font-semibold uppercase text-xs">
              From Private Introduction to Holy Matrimony
            </span>
          </div>

          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-on-surface">
            Recently Engaged Couples in the UK
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Over <strong className="text-on-surface font-semibold">4,800 accomplished professionals and high-calibre singles</strong> have met their lifelong spouses through our discreet Mayfair bureau.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-xs text-on-surface-variant">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              100% In-Person Vetted Members
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[16px] text-secondary">diamond</span>
              British &amp; European Standards
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              Average Match Time: 45 Days
            </span>
          </div>
        </div>

        {/* Engaged Couples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGED_PAIRS.map((pair) => (
            <div
              key={pair.id}
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/40 flex flex-col hover:-translate-y-1"
            >
              {/* Couple Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  src={pair.imageUrl}
                  alt={`${pair.coupleNames} engagement celebration`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Engagement Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-on-surface px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-amber-500 fill-1">
                    favorite
                  </span>
                  <span>Engaged</span>
                </div>

                <div className="absolute top-3 right-3 bg-secondary/90 text-on-secondary px-2 py-0.5 rounded-full text-[11px] font-medium shadow-xs">
                  {pair.community}
                </div>

                {/* Names on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-lg font-bold leading-tight drop-shadow-sm">
                    {pair.coupleNames}
                  </h3>
                  <p className="text-xs text-white/90 drop-shadow-xs flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[13px]">location_on</span>
                    <span>{pair.location}</span>
                  </p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-on-surface-variant flex items-center justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-medium text-tertiary">Ring Ceremony</span>
                    <span className="font-semibold text-on-surface">{pair.engagedDate}</span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <p className="text-on-surface font-medium truncate">
                      <strong className="text-secondary">Groom:</strong> {pair.groomName}
                    </p>
                    <p className="text-on-surface-variant text-[11px] truncate">{pair.groomRole}</p>
                  </div>

                  <div className="space-y-1 text-xs pt-1">
                    <p className="text-on-surface font-medium truncate">
                      <strong className="text-secondary">Bride:</strong> {pair.brideName}
                    </p>
                    <p className="text-on-surface-variant text-[11px] truncate">{pair.brideRole}</p>
                  </div>

                  <p className="text-xs text-on-surface-variant line-clamp-3 italic pt-2 border-t border-outline-variant/20 leading-relaxed">
                    &ldquo;{pair.story}&rdquo;
                  </p>
                </div>

                {/* Match Days Metric & CTA */}
                <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between">
                  <div className="text-[11px] text-tertiary">
                    Matched in <strong className="text-secondary font-bold">{pair.daysToMatch} days</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStory(pair)}
                    className="text-xs font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>Read Story</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* UK Matchmaking Trust Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0d1424] via-[#15203a] to-[#0d1424] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                The Mayfair Gold Standard
              </div>
              <h3 className="text-2xl font-serif text-white font-normal">
                Looking for your British or International life partner?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our certified matchmaking directors at Berkeley Square, Mayfair for a completely discreet consultation.
              </p>
            </div>

            <div className="flex justify-center gap-8 text-center border-y md:border-y-0 md:border-x border-white/15 py-4 md:py-0">
              <div>
                <div className="text-3xl font-serif font-bold text-amber-300">4,800+</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider mt-1">Marriages Celebrated</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-amber-300">100%</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider mt-1">Confidential Dossiers</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href="#browse-matches"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md text-center"
              >
                <span className="material-symbols-outlined text-[18px]">person_search</span>
                <span>View Member Profiles</span>
              </a>
              <a
                href="#contact-section"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-5 py-2.5 rounded-full border border-white/25 transition-all text-center"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Speak to Mayfair Advisory</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Story Detail Modal */}
      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="bg-surface-container-lowest max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">favorite</span>
                <h3 className="font-serif text-xl text-on-surface font-bold">
                  {activeStory.coupleNames}’s Wedding Story
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
                aria-label="Close story"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm">
              <img
                src={activeStory.imageUrl}
                alt={activeStory.coupleNames}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-xs">
                {activeStory.ringCeremonyCity} • Matched in {activeStory.daysToMatch} Days
              </div>
            </div>

            <div className="space-y-3 text-sm text-on-surface-variant leading-relaxed">
              <div className="grid grid-cols-2 gap-2 text-xs bg-surface-container p-3 rounded-xl">
                <div>
                  <span className="text-tertiary block">Groom</span>
                  <strong className="text-on-surface">{activeStory.groomName}</strong>
                  <p className="text-[11px] text-on-surface-variant">{activeStory.groomRole}</p>
                </div>
                <div>
                  <span className="text-tertiary block">Bride</span>
                  <strong className="text-on-surface">{activeStory.brideName}</strong>
                  <p className="text-[11px] text-on-surface-variant">{activeStory.brideRole}</p>
                </div>
              </div>

              <p className="text-on-surface leading-relaxed italic border-l-3 border-secondary pl-3">
                &ldquo;{activeStory.story}&rdquo;
              </p>

              <div className="pt-2 text-xs text-tertiary flex items-center justify-between">
                <span>Ceremony Date: <strong>{activeStory.engagedDate}</strong></span>
                <span>Wedding Date: <strong>{activeStory.weddingDate}</strong></span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="bg-primary-container text-on-primary px-6 py-2 rounded-full text-xs font-semibold hover:bg-primary transition-all cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
