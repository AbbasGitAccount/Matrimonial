import { useState } from 'react'

export interface UKMemberProfile {
  id: string
  gender: 'female' | 'male'
  name: string
  age: number
  height: string
  maritalStatus: string
  religion: string
  heritage: string
  profession: string
  company: string
  income: string
  education: string
  college: string
  city: string
  country: string
  compatibilityScore: number
  interests: string
  diet: string
  drinking: string
  smoking: string
  imageUrl: string
  aboutMe: string
  familyDetails: string
  partnerPreferences: string
  verifiedId: boolean
  lastActive: string
}

const SAMPLE_UK_PROFILES: UKMemberProfile[] = [
  // Brides
  {
    id: 'b1',
    gender: 'female',
    name: 'Charlotte Montgomery',
    age: 28,
    height: "5'7\"",
    maritalStatus: 'Single / Never Married',
    religion: 'Christian / Cultural',
    heritage: 'British & European Heritage',
    profession: 'Commercial Barrister',
    company: 'Leading Commercial Chambers (Inner Temple)',
    income: '£140,000 - £180,000 p.a.',
    education: 'BA (Hons) Jurisprudence & BCL',
    college: 'Magdalen College, Oxford',
    city: 'Kensington, London',
    country: 'United Kingdom',
    compatibilityScore: 97,
    interests: 'Chamber Music, Sailing in Cowes, Country Walks',
    diet: 'Fine Dining / Mediterranean',
    drinking: 'Social Wine Connoisseur',
    smoking: 'Non-Smoker',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    aboutMe:
      'Passionate about law, intellectual discourse, and classical arts. I cherish weekend escapes to the Cotswolds and cooking Sunday roasts with close friends. Seeking a partner of intellect, warmth, and shared values.',
    familyDetails:
      'Established family from Oxfordshire. Father is a retired Circuit Judge; Mother is an architectural historian and trustee.',
    partnerPreferences:
      'Seeking an accomplished, emotionally grounded gentleman (Law, Medicine, Finance, or Enterprise) who values integrity and family life.',
    verifiedId: true,
    lastActive: 'Online Now',
  },
  {
    id: 'b2',
    gender: 'female',
    name: 'Sophia Von Berg',
    age: 29,
    height: "5'8\"",
    maritalStatus: 'Single / Never Married',
    religion: 'Protestant / Open',
    heritage: 'Anglo-Swiss Heritage',
    profession: 'Venture Capital Principal',
    company: 'Mayfair Growth Partners',
    income: '£190,000 - £240,000 p.a.',
    education: 'BSc Economics & MBA',
    college: 'London School of Economics (LSE) & INSEAD',
    city: 'Mayfair, London',
    country: 'United Kingdom',
    compatibilityScore: 95,
    interests: 'Alpine Skiing, Modern Art, Philanthropy',
    diet: 'Organic / Healthy',
    drinking: 'Social Drinker',
    smoking: 'Non-Smoker',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
    aboutMe:
      'Driven by innovation and sustainability during the week, yet grounded by family, literature, and quiet mountain retreats on weekends. Looking for an ambitious, kind partner to build a lifelong home with.',
    familyDetails:
      'Private banking and diplomatic family background. Father is an international diplomat; Mother is a patron of the arts.',
    partnerPreferences:
      'Seeking a cultured, dynamic professional or entrepreneur with global perspective and deep respect for partnership.',
    verifiedId: true,
    lastActive: 'Active 15m ago',
  },
  {
    id: 'b3',
    gender: 'female',
    name: 'Dr. Eleanor Crawford',
    age: 31,
    height: "5'6\"",
    maritalStatus: 'Single / Never Married',
    religion: 'Anglican',
    heritage: 'Scottish & English',
    profession: 'Consultant Paediatric Neurologist',
    company: 'Imperial College Healthcare NHS Trust',
    income: '£125,000 - £150,000 p.a.',
    education: 'MB BChir Medicine & PhD Neuroscience',
    college: 'Trinity College, Cambridge',
    city: 'Richmond, Surrey',
    country: 'United Kingdom',
    compatibilityScore: 98,
    interests: 'Equestrian Dressage, Book Clubs, Gardening',
    diet: 'Vegetarian',
    drinking: 'Occasional',
    smoking: 'Non-Smoker',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80',
    aboutMe:
      'Dedicated to medicine, children’s health, and academic research. In downtime, I tend my Victorian garden and train my horse in Surrey. Looking for a dependable companion with an affectionate, curious soul.',
    familyDetails:
      'Medical and academic family rooted in Edinburgh and London. Brother is a senior academic at Oxford.',
    partnerPreferences:
      'An emotionally intelligent, educated gentleman who cherishes countryside weekends and honest conversation.',
    verifiedId: true,
    lastActive: 'Active 1h ago',
  },
  {
    id: 'b4',
    gender: 'female',
    name: 'Isabella St. John',
    age: 27,
    height: "5'7\"",
    maritalStatus: 'Single / Never Married',
    religion: 'Christian',
    heritage: 'British Heritage',
    profession: 'Specialist, Old Master Paintings',
    company: 'Sotheby’s Private Advisory, London',
    income: '£85,000 - £110,000 p.a.',
    education: 'MA History of Art',
    college: 'The Courtauld Institute of Art',
    city: 'Chelsea, London',
    country: 'United Kingdom',
    compatibilityScore: 94,
    interests: 'Opera at Glyndebourne, Tennis, Antiques',
    diet: 'Mediterranean',
    drinking: 'Social',
    smoking: 'Non-Smoker',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
    aboutMe:
      'Curating museum collections by day, exploring London’s historic theatre and gallery districts by night. I value British heritage, kindness, and spontaneous weekend road trips.',
    familyDetails:
      'Traditional English family from Hampshire with strong ties to land stewardship and charitable trusts.',
    partnerPreferences:
      'Seeking a cultivated, polite gentleman who appreciates culture, humor, and devoted family life.',
    verifiedId: true,
    lastActive: 'Online Now',
  },

  // Grooms
  {
    id: 'g1',
    gender: 'male',
    name: 'Dr. Oliver Kensington',
    age: 33,
    height: "6'1\"",
    maritalStatus: 'Single / Never Married',
    religion: 'Church of England',
    heritage: 'British Heritage',
    profession: 'Consultant Orthopaedic Surgeon',
    company: 'The King Edward VII Hospital & NHS',
    income: '£180,000 - £230,000 p.a.',
    education: 'MB BChir, MA, FRCS (Tr & Orth)',
    college: 'King’s College, Cambridge',
    city: 'Marylebone, London',
    country: 'United Kingdom',
    compatibilityScore: 98,
    interests: 'Rowing, Classical Piano, Country Pursuits',
    diet: 'Omnivore',
    drinking: 'Social',
    smoking: 'Non-Smoker',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    aboutMe:
      'Surgeon with a passion for precision and sports medicine. Outside the operating theatre, I train for regattas, play piano, and host friends for dinners. Searching for my life partner to create a warm home together.',
    familyDetails:
      'Distinguished medical family from Surrey. Father is an Emeritus Professor of Cardiology; Mother is a Barrister.',
    partnerPreferences:
      'Seeking an accomplished, loving woman of warmth and intellect who values family foundation.',
    verifiedId: true,
    lastActive: 'Online Now',
  },
  {
    id: 'g2',
    gender: 'male',
    name: 'Alexander Sterling',
    age: 35,
    height: "6'2\"",
    maritalStatus: 'Single / Never Married',
    religion: 'Christian / Values-driven',
    heritage: 'British & European',
    profession: 'Founder & CEO, DeepTech Logistics',
    company: 'Sterling Autonomous & Tech Fund',
    income: '£350,000+ p.a.',
    education: 'MEng Aeronautical Engineering',
    college: 'Imperial College London',
    city: 'Shoreditch, London & Cotswolds',
    country: 'United Kingdom',
    compatibilityScore: 96,
    interests: 'Sailing, Aviation, Vineyard Collecting',
    diet: 'Healthy / Organic',
    drinking: 'Social',
    smoking: 'Non-Smoker',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
    aboutMe:
      'Having scaled an engineering enterprise, I have refocused on what truly matters: marriage, lifelong partnership, and raising children in the English countryside. Seeking a passionate, articulate equal.',
    familyDetails:
      'Industrial and engineering roots in the West Midlands. Family estate in Gloucestershire.',
    partnerPreferences:
      'Looking for a confident, warm-hearted woman who appreciates both London city energy and countryside peace.',
    verifiedId: true,
    lastActive: 'Active 20m ago',
  },
  {
    id: 'g3',
    gender: 'male',
    name: 'Julian Hastings',
    age: 32,
    height: "5'11\"",
    maritalStatus: 'Single / Never Married',
    religion: 'Anglican',
    heritage: 'Scottish & English',
    profession: 'Partner, Renewable Energy Infrastructure',
    company: 'Caledonian Capital Partners',
    income: '£165,000 - £210,000 p.a.',
    education: 'MSc Environmental Economics & Finance',
    college: 'University of Edinburgh & Oxford',
    city: 'Westminster, London & Edinburgh',
    country: 'United Kingdom',
    compatibilityScore: 95,
    interests: 'Highland Hiking, Fly Fishing, Modern History',
    diet: 'Omnivore',
    drinking: 'Single Malt Enthusiast / Social',
    smoking: 'Non-Smoker',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
    aboutMe:
      'Financing clean energy projects across the UK and Nordics. Grounded, humorous, and an avid reader of European history. Searching for a compassionate, ambitious partner who loves travel and cozy fireside chats.',
    familyDetails:
      'Respected family from Edinburgh. Father is an architect; Mother is a classical cellist.',
    partnerPreferences:
      'Seeking an articulate, thoughtful woman with a generous spirit and a genuine desire for family life.',
    verifiedId: true,
    lastActive: 'Active 2h ago',
  },
  {
    id: 'g4',
    gender: 'male',
    name: 'Marcus Cavendish',
    age: 34,
    height: "6'0\"",
    maritalStatus: 'Single / Never Married',
    religion: 'Christian',
    heritage: 'British Heritage',
    profession: 'Senior Portfolio Manager, Global Equities',
    company: 'St. James’s Wealth Advisory',
    income: '£260,000 - £320,000 p.a.',
    education: 'BA (Hons) Philosophy, Politics & Economics (PPE)',
    college: 'Balliol College, Oxford',
    city: 'Belgravia, London',
    country: 'United Kingdom',
    compatibilityScore: 97,
    interests: 'Real Tennis, Opera, Ski Mountaineering',
    diet: 'Fine Dining / Mediterranean',
    drinking: 'Social',
    smoking: 'Non-Smoker',
    imageUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80',
    aboutMe:
      'Analytical by day, creative and outgoing outside work. I enjoy curating private dinner parties, attending the Glyndebourne festival, and skiing in Verbier. Looking for someone genuine with whom to share life’s grand adventure.',
    familyDetails:
      'Long-standing lineage in Surrey and London with backgrounds in public service and law.',
    partnerPreferences:
      'Seeking a bright, elegant, and warm-spirited lady who values tradition, partnership, and family.',
    verifiedId: true,
    lastActive: 'Online Now',
  },
]

interface ShaadiMatchesSectionProps {
  onOpenBooking: (service?: string) => void
}

export function ShaadiMatchesSection({ onOpenBooking }: ShaadiMatchesSectionProps) {
  const [activeGender, setActiveGender] = useState<'female' | 'male'>('female')
  const [sentInterests, setSentInterests] = useState<Record<string, boolean>>({})
  const [shortlisted, setShortlisted] = useState<Record<string, boolean>>({})
  const [selectedProfile, setSelectedProfile] = useState<UKMemberProfile | null>(null)
  const [activeCompatibility, setActiveCompatibility] = useState<UKMemberProfile | null>(null)

  const toggleInterest = (id: string) => {
    setSentInterests((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleShortlist = (id: string) => {
    setShortlisted((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const filteredProfiles = SAMPLE_UK_PROFILES.filter((p) => p.gender === activeGender)

  return (
    <section id="browse-matches" className="w-full py-20 bg-surface-container-low/50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with British Verification Badges */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-fixed/60 px-4 py-1.5 rounded-full mb-3 border border-primary/20 shadow-xs">
            <span className="material-symbols-outlined text-[17px] text-primary">verified</span>
            <span className="font-label-sm text-primary tracking-widest font-semibold uppercase text-xs">
              UK &amp; International Bureau • In-Person ID &amp; Background Vetted
            </span>
          </div>

          <h2
            className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-on-surface"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Curated Member Portfolios
          </h2>

          <p className="font-body-md text-on-surface-variant mt-3 text-base sm:text-lg">
            Connect directly with verified accomplished professionals and distinguished British and European singles seeking holy matrimony.
          </p>

          {/* Bride / Groom Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <div className="bg-white p-1.5 rounded-full shadow-md border border-[#e5d7de] inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveGender('female')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeGender === 'female'
                    ? 'bg-secondary text-white shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">woman</span>
                <span>Accomplished Ladies ({SAMPLE_UK_PROFILES.filter((p) => p.gender === 'female').length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveGender('male')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeGender === 'male'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">man</span>
                <span>Accomplished Gentlemen ({SAMPLE_UK_PROFILES.filter((p) => p.gender === 'male').length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => {
            const hasSentInterest = !!sentInterests[profile.id]
            const isShortlisted = !!shortlisted[profile.id]

            return (
              <div
                key={profile.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-outline-variant/40 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Photo & Badges */}
                <div className="relative h-72 w-full overflow-hidden bg-surface-container-highest">
                  <img
                    src={profile.imageUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Verification Pill */}
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm backdrop-blur-xs">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    <span>100% Vetted</span>
                  </div>

                  {/* Online / Active status */}
                  <div className="absolute top-3 right-3 bg-white/95 text-on-surface text-[10.5px] font-medium px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        profile.lastActive === 'Online Now' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                      }`}
                    />
                    <span>{profile.lastActive}</span>
                  </div>

                  {/* Star Shortlist button */}
                  <button
                    type="button"
                    onClick={() => toggleShortlist(profile.id)}
                    aria-label="Shortlist profile"
                    className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer ${
                      isShortlisted
                        ? 'bg-amber-400 text-white scale-110'
                        : 'bg-white/80 backdrop-blur-xs text-on-surface-variant hover:bg-white'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isShortlisted ? 'star' : 'star_border'}
                    </span>
                  </button>

                  {/* Candidate Primary Summary */}
                  <div className="absolute bottom-3 left-4 right-14 text-white">
                    <h3
                      className="text-xl font-bold font-serif leading-tight truncate"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {profile.name}
                    </h3>
                    <p className="text-xs text-white/90 mt-0.5">
                      {profile.age} Yrs • {profile.height} • {profile.maritalStatus}
                    </p>
                  </div>
                </div>

                {/* Candidate Member Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5 text-xs">
                    {/* Profession & Income */}
                    <div className="flex items-start gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                        work
                      </span>
                      <div>
                        <span className="font-bold text-[13px] block text-on-surface">
                          {profile.profession}
                        </span>
                        <span className="text-on-surface-variant">{profile.company}</span>
                        <span className="block font-semibold text-secondary mt-0.5">{profile.income}</span>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="flex items-start gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">
                        school
                      </span>
                      <div>
                        <span className="font-medium text-on-surface block">{profile.education}</span>
                        <span className="text-[11px] text-on-surface-variant">{profile.college}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">
                        location_on
                      </span>
                      <span>{profile.city}, {profile.country}</span>
                    </div>

                    {/* Core Compatibility Score */}
                    <div className="pt-2 flex items-center justify-between border-t border-outline-variant/30">
                      <button
                        type="button"
                        onClick={() => setActiveCompatibility(profile)}
                        className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          favorite
                        </span>
                        <span>Compatibility: {profile.compatibilityScore}% Core Values</span>
                      </button>

                      <span className="text-[11px] bg-secondary-fixed/50 text-on-secondary-fixed px-2 py-0.5 rounded-md font-medium">
                        Verified
                      </span>
                    </div>

                    {/* Interests tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="bg-surface-container text-on-surface-variant text-[10.5px] px-2 py-0.5 rounded-full font-medium">
                        {profile.interests}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-outline-variant/30 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleInterest(profile.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer ${
                        hasSentInterest
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-primary-container text-on-primary hover:bg-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {hasSentInterest ? 'check_circle' : 'send'}
                      </span>
                      <span>{hasSentInterest ? 'Introduction Sent' : 'Request Intro'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProfile(profile)}
                      className="px-3 py-2.5 border border-outline-variant rounded-xl text-on-surface text-xs font-medium hover:bg-surface-container transition-colors cursor-pointer"
                    >
                      Dossier
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Comprehensive Member Dossier Modal */}
      {selectedProfile && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProfile(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={selectedProfile.imageUrl}
                    alt={selectedProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-on-surface">
                    {selectedProfile.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    {selectedProfile.profession} • {selectedProfile.city}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProfile(null)}
                className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {/* Dossier Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-surface-container-low p-4 rounded-2xl space-y-2">
                <span className="font-bold text-secondary uppercase tracking-wider text-[11px] block">
                  Career &amp; Education
                </span>
                <p><strong>Profession:</strong> {selectedProfile.profession}</p>
                <p><strong>Organisation:</strong> {selectedProfile.company}</p>
                <p><strong>Remuneration:</strong> {selectedProfile.income}</p>
                <p><strong>Degree:</strong> {selectedProfile.education}</p>
                <p><strong>University:</strong> {selectedProfile.college}</p>
              </div>

              <div className="bg-surface-container-low p-4 rounded-2xl space-y-2">
                <span className="font-bold text-secondary uppercase tracking-wider text-[11px] block">
                  Personal &amp; Lifestyle
                </span>
                <p><strong>Residence:</strong> {selectedProfile.city}, {selectedProfile.country}</p>
                <p><strong>Heritage:</strong> {selectedProfile.heritage}</p>
                <p><strong>Dietary:</strong> {selectedProfile.diet}</p>
                <p><strong>Interests:</strong> {selectedProfile.interests}</p>
                <p><strong>Core Compatibility:</strong> {selectedProfile.compatibilityScore}% Match</p>
              </div>
            </div>

            {/* Bio Narrative */}
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-on-surface">About the Candidate</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/30">
                {selectedProfile.aboutMe}
              </p>
            </div>

            {/* Family Heritage */}
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-on-surface">Family &amp; Lineage</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/30">
                {selectedProfile.familyDetails}
              </p>
            </div>

            {/* Partner Expectations */}
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-on-surface">Looking for in a Spouse</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/30">
                {selectedProfile.partnerPreferences}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProfile(null)}
                className="px-5 py-2.5 rounded-full border border-outline-variant text-xs font-semibold text-on-surface hover:bg-surface-container"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedProfile(null)
                  onOpenBooking(`Private Introduction to ${selectedProfile.name}`)
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-xs font-bold shadow-md hover:shadow-lg"
              >
                Request Confidential Introduction
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Compatibility Modal */}
      {activeCompatibility && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveCompatibility(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
              <h3 className="font-serif text-lg font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">favorite</span>
                Compatibility Assessment
              </h3>
              <button
                type="button"
                onClick={() => setActiveCompatibility(null)}
                className="p-1 text-on-surface-variant hover:bg-surface-container rounded-full"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="text-center py-4 bg-surface-container rounded-2xl">
              <div className="text-4xl font-serif font-bold text-secondary">
                {activeCompatibility.compatibilityScore}%
              </div>
              <p className="text-xs text-on-surface-variant mt-1 font-medium">
                Overall Core Values &amp; Psychological Compatibility
              </p>
            </div>

            <div className="space-y-2 text-xs text-on-surface-variant">
              <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                <span>Intellectual &amp; Career Alignment</span>
                <strong className="text-on-surface">Exceptional (98%)</strong>
              </div>
              <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                <span>Family Values &amp; Long-Term Vision</span>
                <strong className="text-on-surface">Very High (96%)</strong>
              </div>
              <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                <span>Lifestyle &amp; Cultural Compatibility</span>
                <strong className="text-on-surface">Aligned (95%)</strong>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Communication &amp; Temperament</span>
                <strong className="text-on-surface">Harmonious (97%)</strong>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveCompatibility(null)}
              className="w-full bg-primary-container text-on-primary py-2.5 rounded-full text-xs font-semibold hover:bg-primary transition-all cursor-pointer mt-2"
            >
              Close Assessment
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
