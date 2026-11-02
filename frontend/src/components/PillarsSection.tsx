export function PillarsSection() {
  return (
    <section
      className="mx-auto px-margin-mobile lg:px-margin-desktop py-space-xl w-full"
      style={{
        paddingTop: '80px',
        marginBottom: '60px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
        <span className="font-label-sm text-label-sm tracking-widest text-secondary font-semibold uppercase block mb-space-xs">
          Clinical Breadth &amp; Heart
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Two Foundational Pillars of Sacred Matchmaking
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          Where verified background integrity meets intuitive, lifelong relationship harmony.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card 1: Personalized Human Matchmaking */}
        <div className="bg-surface-container rounded-2xl p-space-xl shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="w-14 h-14 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-space-md shadow-sm">
              <span className="material-symbols-outlined text-[28px]">psychology_alt</span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
              Primary Modality
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-sm">
              Personalized Human Matchmaking
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Matrimonial.com utilises a client-centred, experiential approach that grounds matrimonial search in genuine shared values. Instead of remaining overwhelmed by endless swipe apps, you explore real-time compatibility, emotional resonance, and lifestyle goals.
            </p>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface mb-space-lg">
              <li className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                  check_circle
                </span>
                <span>Deep understanding of emotional readiness and relationship goals</span>
              </li>
              <li className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                  check_circle
                </span>
                <span>Family value attunement and cultural grounding</span>
              </li>
              <li className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                  check_circle
                </span>
                <span>Fostering genuine autonomy and honest courtship conversations</span>
              </li>
            </ul>
          </div>
          <div className="pt-space-md bg-surface-container-high p-space-md rounded-xl">
            <p className="font-label-md text-label-md text-tertiary">
              Certified Matrimonial Specialist (Global Matchmaking Institute)
            </p>
          </div>
        </div>

        {/* Card 2: 100% Verified Profile & Family Integrity */}
        <div className="bg-surface-container rounded-2xl p-space-xl shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="w-14 h-14 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-space-md shadow-sm">
              <span className="material-symbols-outlined text-[28px]">clinical_notes</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase">
              Foundational Discipline
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-sm">
              100% Verified Profile &amp; Family Integrity
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Decades of family advisory experience give Matrimonial.com an exceptional, unflappable foundation when conducting background screenings, verifying education and employment, and ensuring absolute privacy.
            </p>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface mb-space-lg">
              <li className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  check_circle
                </span>
                <span>Calm, safe containment and total discretion for discerning families</span>
              </li>
              <li className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  check_circle
                </span>
                <span>Complete authentication of government IDs, career, and marital status</span>
              </li>
              <li className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  check_circle
                </span>
                <span>Strict reflective standards of confidentiality and mutual consent</span>
              </li>
            </ul>
          </div>
          <div className="pt-space-md bg-surface-container-high p-space-md rounded-xl">
            <p className="font-label-md text-label-md text-tertiary">
              Registered Family Counselor Background &amp; Verification Accreditation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
