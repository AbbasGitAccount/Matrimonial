import { useState } from 'react'

interface HeroProps {
  onOpenBooking: (service?: string) => void
}

interface BackgroundTheme {
  id: string
  label: string
  tag: string
  url: string
}

const UK_MARRIAGE_BACKGROUNDS: BackgroundTheme[] = [
  {
    id: 'black-tie-couture',
    label: '💍 Black Tie & Bridal Couture',
    tag: 'Classic British Groom & Bride',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'manor-reception',
    label: '🏰 English Country Manor',
    tag: 'Cotswolds & Estate Romance',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'countryside-vows',
    label: '🌿 Countryside Romance',
    tag: 'Somerset & Surrey Estates',
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'floral-ceremony',
    label: '💐 Cathedral & Floral Arch',
    tag: 'Sacred Vows & Cathedral Elegance',
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=2000&q=85',
  },
]

export function Hero({ onOpenBooking }: HeroProps) {
  const [selectedBgIndex, setSelectedBgIndex] = useState(0)
  const [seekingGender, setSeekingGender] = useState('Accomplished Woman')
  const [ageRange, setAgeRange] = useState('26 to 34')
  const [location, setLocation] = useState('London & Greater London')
  const [education, setEducation] = useState('Oxbridge & Russell Group')

  const activeBg = UK_MARRIAGE_BACKGROUNDS[selectedBgIndex]

  const handleSearchMatches = (e: React.FormEvent) => {
    e.preventDefault()
    const matchesSection = document.getElementById('browse-matches')
    if (matchesSection) {
      matchesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full overflow-hidden bg-[#0d1424] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 transition-colors duration-700">
      {/* 1. Authentic UK & International Marriage Background Image */}
      <img
        key={activeBg.url}
        src={activeBg.url}
        alt={`UK Matrimonial Background - ${activeBg.label}`}
        className="absolute inset-0 w-full h-full object-cover object-right md:object-[75%_center] pointer-events-none -z-20 filter brightness-[0.88] contrast-[1.05] transition-opacity duration-700"
      />

      {/* 2. Sophisticated British Navy & Slate Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090e1a]/95 via-[#090e1a]/82 md:via-[#090e1a]/65 to-[#090e1a]/25 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-black/40 pointer-events-none -z-10" />

      {/* Ambient British Blue & Gold Glow Accent */}
      <div className="absolute -top-32 left-1/3 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-amber-500/15 via-sky-600/20 to-indigo-800/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Elite UK Matrimonial Bureau */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top portal badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-amber-200">
              <span className="material-symbols-outlined text-[18px] text-amber-400">verified</span>
              <span className="font-semibold tracking-wide uppercase text-[11px] sm:text-xs">
                The UK &amp; International Matrimonial Bureau • London &amp; Mayfair
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] text-white">
              Where Intellectual Equal Meets{' '}
              <span className="italic text-amber-300 font-serif" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Lifelong Marriage
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-light">
              Bespoke, discreet matchmaking for accomplished professionals, executives, and high-calibre singles across the United Kingdom and Europe. Every introduction is vetted in person with absolute confidentiality.
            </p>

            {/* UK Member Search / Matchmaker Filter Bar */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/15 text-xs">
                <span className="font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">favorite</span>
                  Curated Partner Introductions
                </span>
                <span className="text-white/80 hidden sm:inline-block">London • Surrey • Cotswolds • International</span>
              </div>

              <form onSubmit={handleSearchMatches} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {/* Seeking */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">Seeking</label>
                  <select
                    value={seekingGender}
                    onChange={(e) => setSeekingGender(e.target.value)}
                    className="w-full bg-[#131b2e]/90 text-white text-xs sm:text-sm rounded-lg px-3 py-2.5 border border-white/20 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Accomplished Woman">Bride / Woman</option>
                    <option value="Accomplished Gentleman">Groom / Gentleman</option>
                  </select>
                </div>

                {/* Age */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">Age Bracket</label>
                  <select
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    className="w-full bg-[#131b2e]/90 text-white text-xs sm:text-sm rounded-lg px-3 py-2.5 border border-white/20 focus:outline-none focus:border-amber-400"
                  >
                    <option value="23 to 29">23 to 29 Yrs</option>
                    <option value="26 to 34">26 to 34 Yrs</option>
                    <option value="32 to 42">32 to 42 Yrs</option>
                    <option value="40 to 55">40 to 55 Yrs</option>
                    <option value="50+">50+ Yrs</option>
                  </select>
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">Residence</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#131b2e]/90 text-white text-xs sm:text-sm rounded-lg px-3 py-2.5 border border-white/20 focus:outline-none focus:border-amber-400"
                  >
                    <option value="London & Greater London">London (Kensington, Mayfair, Chelsea)</option>
                    <option value="Home Counties & Surrey">Surrey &amp; Home Counties</option>
                    <option value="Oxford & Cambridge">Oxford &amp; Cambridge</option>
                    <option value="Cotswolds & West Country">Cotswolds &amp; West Country</option>
                    <option value="Scotland (Edinburgh)">Edinburgh &amp; Scotland</option>
                    <option value="Europe & International">Europe / International</option>
                  </select>
                </div>

                {/* Education / Background */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">Background</label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full bg-[#131b2e]/90 text-white text-xs sm:text-sm rounded-lg px-3 py-2.5 border border-white/20 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Oxbridge & Russell Group">Oxbridge &amp; Russell Group</option>
                    <option value="Medicine & Law">Medicine, Barrister, Surgery</option>
                    <option value="Finance & Private Equity">Finance, PE &amp; Investment</option>
                    <option value="Tech Founders & CEOs">Founders &amp; Entrepreneurs</option>
                    <option value="Arts, Heritage & Culture">Arts, Architecture &amp; Heritage</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="sm:col-span-2 md:col-span-4 pt-1 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-[20px]">search</span>
                    <span>Explore Curated UK Portfolios</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking('Confidential Membership Application')}
                    className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                    <span>Apply for Private Membership</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Portal Trust Highlights */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">verified_user</span>
                100% In-Person ID &amp; Credential Vetted
              </span>
              <span className="flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="material-symbols-outlined text-[16px] text-amber-400">hotel_class</span>
                Bespoke Matchmaking Director
              </span>
              <span className="flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="material-symbols-outlined text-[16px] text-sky-400">lock</span>
                Strict British GDPR Discretion
              </span>
            </div>
          </div>

          {/* Right Column: UK High Society Success Story & Theme Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-4">
            {/* Visual Glassmorphic Couple Highlight Card */}
            <div className="w-full max-w-sm bg-[#0e1629]/80 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl text-left space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <span className="material-symbols-outlined text-[20px]">diamond</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-white leading-tight">Mayfair Advisory</h3>
                    <p className="text-[11px] text-amber-200">Berkeley Square, London W1</p>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Private Member
                </span>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed italic border-l-2 border-amber-400/80 pl-3">
                &ldquo;A lasting marriage requires profound emotional resonance, shared intellect, and aligned life values.&rdquo;
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/15 text-center">
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-base font-bold text-amber-300">84%</div>
                  <div className="text-[10px] text-white/70">Success Rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-base font-bold text-amber-300">1:1</div>
                  <div className="text-[10px] text-white/70">Dedicated</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-base font-bold text-amber-300">100%</div>
                  <div className="text-[10px] text-white/70">Confidential</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking('Private Matchmaker Consultation')}
                className="w-full text-center text-xs text-amber-200 hover:text-white font-medium py-1.5 flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>Book a Private Matchmaker Consultation</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>

            {/* Background Theme Switcher Pill */}
            <div className="w-full max-w-sm bg-[#090f1d]/90 backdrop-blur-md border border-white/15 rounded-xl p-2.5 shadow-xl">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">wallpaper</span>
                  Wedding Setting (UK &amp; International):
                </span>
                <span className="text-[10px] text-white/60">{activeBg.tag}</span>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {UK_MARRIAGE_BACKGROUNDS.map((theme, idx) => {
                  const isActive = selectedBgIndex === idx
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => setSelectedBgIndex(idx)}
                      className={`text-left text-xs px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer truncate ${
                        isActive
                          ? 'bg-amber-400 text-stone-950 font-bold shadow-md'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      <span className="truncate">{theme.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
