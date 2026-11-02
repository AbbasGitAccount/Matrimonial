import { useState, FormEvent } from 'react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Private Membership Consultation',
    mode: 'In-Person (Mayfair Bureau, London)',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact-section" className="w-full py-20 bg-surface scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm tracking-widest text-secondary font-semibold uppercase block mb-2 text-xs">
            Connect &amp; Begin
          </span>
          <h2
            className="font-headline-lg text-3xl sm:text-4xl text-on-surface"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Connect With Our Mayfair Advisory
          </h2>
          <p className="font-body-md text-on-surface-variant mt-3 text-base sm:text-lg">
            Whether you have questions regarding private membership or wish to schedule a confidential discussion, our senior directors invite you to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Practice Info & Bureau Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-container rounded-2xl p-6 sm:p-8 shadow-sm border border-[#f0dbf9]/70 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[22px]">location_on</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-on-surface">London Headquarters</h3>
                  <p className="text-sm text-on-surface-variant">
                    14 Berkeley Square, Mayfair, London W1J 6BD, UK
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-on-surface">Direct Telephone</h3>
                  <a
                    href="tel:+442079460912"
                    className="text-sm text-primary font-medium hover:underline block"
                  >
                    +44 (0)20 7946 0912
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-on-surface">Private Inquiries</h3>
                  <a
                    href="mailto:advisory@matrimonial.com"
                    className="text-sm text-primary font-medium hover:underline block"
                  >
                    advisory@matrimonial.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-on-surface">Consultation Hours</h3>
                  <p className="text-sm text-on-surface-variant">
                    Monday – Friday: By Strict Appointment
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f0dbf9] text-xs text-on-surface-variant leading-relaxed">
                <p>
                  <strong>Confidentiality Assurance:</strong> Every inquiry and membership dossier is protected under professional legal discretion and British GDPR data privacy.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Enquiry / Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-low rounded-2xl p-6 sm:p-10 shadow-md border border-[#e5d7de]/80">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <span className="material-symbols-outlined text-[36px]">check_circle</span>
                  </div>
                  <h3
                    className="text-2xl font-serif text-on-surface"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Thank You, {formData.name || 'Esteemed Member'}
                  </h3>
                  <p className="text-on-surface-variant max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Your confidential enquiry for <strong>{formData.service}</strong> has been received by our Mayfair director. We will be in touch discreetly within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Private Membership Consultation',
                        mode: 'In-Person (Mayfair Bureau, London)',
                        message: '',
                      })
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-container transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className="text-2xl font-serif text-on-surface mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Request a Private Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. William Cavendish"
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-white text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.co.uk"
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-white text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7XXX XXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-white text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                        Consultation Type
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-white text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm transition-all"
                      >
                        <option value="Private Membership Consultation">Private Membership Consultation</option>
                        <option value="Curated Dossier Assessment">Curated Dossier Assessment</option>
                        <option value="Executive & International Advisory">Executive &amp; International Advisory</option>
                        <option value="Confidential Introductory Call">Confidential 15-Minute Introductory Call</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                      Consultation Mode
                    </label>
                    <div className="flex flex-wrap gap-4 pt-1">
                      <label className="inline-flex items-center gap-2 text-sm text-on-surface cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          value="In-Person (Mayfair Bureau, London)"
                          checked={formData.mode === 'In-Person (Mayfair Bureau, London)'}
                          onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                          className="accent-primary"
                        />
                        <span>In-Person (Mayfair Bureau, London)</span>
                      </label>
                      <label className="inline-flex items-center gap-2 text-sm text-on-surface cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          value="Confidential Video Call (UK & Worldwide)"
                          checked={formData.mode === 'Confidential Video Call (UK & Worldwide)'}
                          onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                          className="accent-primary"
                        />
                        <span>Confidential Video Call</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                      Partner Expectations / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what qualities or values you are looking for in a partner, or any preferred times..."
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-white text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>Submit Confidential Request</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
