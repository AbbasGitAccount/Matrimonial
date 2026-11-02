interface CtaBannerProps {
  onOpenBooking: (service?: string) => void
}

export function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  return (
    <section
      className="mx-auto px-margin-mobile lg:px-margin-desktop my-space-lg mb-space-xl w-full"
      style={{
        paddingTop: '40px',
        marginBottom: '-5rem',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        className="rounded-2xl bg-gradient-to-br from-secondary-fixed via-surface-container-high to-tertiary-fixed p-space-lg lg:p-space-xl shadow-lg relative overflow-hidden w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingLeft: '40px', paddingRight: '40px' }}
      >
        {/* Background subtle concentric aura */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-surface/40 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-space-lg w-full mx-auto">
          <div className="text-center mx-auto">
            <span className="font-label-sm text-label-sm tracking-widest text-secondary font-semibold uppercase block mb-space-xs text-center">
              Take the Next Step
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface text-center">
              Your Journey Starts with a Simple Conversation
            </h2>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center shrink-0 gap-space-md">
            <a
              className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg hover:bg-primary-container transition-all shadow-md shrink-0 cursor-pointer"
              href="tel:+442079460912"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>+44 (0)20 7946 0912</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking('General Matrimonial Enquiry')}
              className="inline-flex items-center gap-space-xs bg-surface text-on-surface font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg hover:bg-surface-container transition-all shadow-sm shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
              <span>Send an Enquiry</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
