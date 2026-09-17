// =====================================================================
// Mercola / PAX — full-width tile with horizontal screenshot rail
// =====================================================================
// BASE_URL auto-resolves: '/' in dev, '/Portfolio_Website/' when deployed
const BASE = import.meta.env.BASE_URL

const paxScreens = [
  { label: 'Pax Voice',      image: `${BASE}pax/03-voice.jpg`,       alt: 'Pax Voice — real-time voice coach' },
  { label: 'Home',           image: `${BASE}pax/02-home.jpg`,        alt: 'PAX home dashboard' },
  { label: 'Food Buddy',     image: `${BASE}pax/04-food-buddy.jpg`,  alt: 'Food Buddy food logging' },
  { label: 'Assessment',     image: `${BASE}pax/05-assessment.jpg`,  alt: 'Wellness assessment' },
  { label: 'My Health',      image: `${BASE}pax/06-my-health.jpg`,   alt: 'My Health — results and reports' },
  { label: 'Stride Strong',  image: `${BASE}pax/07-stride.jpg`,      alt: 'Stride Strong movement tracking' },
  { label: 'Shop',           image: `${BASE}pax/08-shop.jpg`,        alt: 'Shop — supplements and lab tests' },
  { label: 'Welcome',        image: `${BASE}pax/01-welcome.jpg`,     alt: 'PAX welcome screen' },
]

function Mercola() {
  return (
    <div className="mt-8">
      <h3 className="border-b border-cinnamon-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        Mercola Consulting Services
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        <article className="relative col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 p-6 shadow-tile">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-cinnamon-300/40 blur-3xl" />

          {/* Pills */}
          <div className="relative flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">
              Mobile · Health
            </span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Kotlin</span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Jetpack Compose</span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">LiveKit</span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">CameraX</span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Hilt · Clean Arch</span>
          </div>

          {/* Title + description */}
          <h4 className="relative mt-3 text-2xl font-black uppercase tracking-tight text-coal-900">
            PAX — Mercola Health Coach 2.0
          </h4>
          <p className="relative mt-2 max-w-3xl text-sm leading-relaxed text-coal-600">
            Consumer health-coaching app built around Pax, a voice-first AI coach running on real-time audio. Shipped 20+ feature modules on a 100% Jetpack Compose UI: Food Buddy camera-based food logging, a 40-question health assessment across 6 modules, lab results and medical reports, Stride Strong movement tracking on Health Connect, commerce, and account security with biometric app-lock.
          </p>

          {/* Screenshot rail — horizontally scrollable */}
          <div className="relative mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {paxScreens.map((screen) => (
              <figure key={screen.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
                <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
                  <img
                    src={screen.image}
                    alt={screen.alt}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                <figcaption className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-coal-500">
                  {screen.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// DOST — full-width platform tile
// =====================================================================
function DOST() {
  return (
    <div className="mt-8">
      <h3 className="border-b border-cinnamon-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        Department of Science &amp; Technology
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        <article className="relative col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 p-6 shadow-tile">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-cinnamon-300/40 blur-3xl" />
          <div className="relative flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">
              Platform · Lead
            </span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">React + TS</span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Node + TS</span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Kubernetes</span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Helm · Terraform</span>
            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">PostgreSQL</span>
          </div>
          <h4 className="relative mt-3 text-2xl font-black uppercase tracking-tight text-coal-900">
            DOST Engineering Platform
          </h4>
          <p className="relative mt-2 max-w-3xl text-sm leading-relaxed text-coal-600">
            On-prem Kubernetes platform powering multiple government applications. Authored the CI/CD pipelines, observability stack, and RBAC model used by every team that ships through it.
          </p>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// VeritasPay — half-width with YouTube thumbnail
// =====================================================================
function VeritasPay() {
  return (
    <div className="mt-8">
      <h3 className="border-b border-paper-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        VeritasPay
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-cinnamon-200/50 to-paper-200">
            <img
              src="https://img.youtube.com/vi/zv_7Rc0WcvY/hqdefault.jpg"
              alt="VeritasPay Face to Face Payment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cinnamon-300">
                VeritasPay
              </p>
              <p className="text-base font-black uppercase text-paper-50">
                Tap. Pay. Done.
              </p>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-base font-bold tracking-tight text-coal-900">
              Face-to-Face Payment
            </h4>
            <p className="mt-1 text-sm text-coal-600">
              Kotlin payment terminals for in-person card &amp; QR. Hardened security, improved UI on constrained POS hardware.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// UOB — half-width, regional banking (SG · MY · TH · ID pill)
// =====================================================================
function UOB() {
  return (
    <div className="mt-8">
      <h3 className="border-b border-paper-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        United Overseas Bank (UOB)
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-6">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src="https://img.youtube.com/vi/DXglgNQamv8/hqdefault.jpg"
              alt="UOB TMRW"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 to-transparent" />
            <span className="absolute right-3 top-3 inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">
              SG · MY · TH · ID
            </span>
          </div>
          <div className="p-4">
            <h4 className="text-base font-bold tracking-tight text-coal-900">
              UOB TMRW — Regional Banking
            </h4>
            <p className="mt-1 text-sm text-coal-600">
              Diagnosed complex production incidents across four country builds. Shipped Kotlin features under strict banking compliance.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// Global Payments — 2 tiles: P@TT + Gift App
// =====================================================================
function GlobalPayments() {
  return (
    <div className="mt-8">
      <h3 className="border-b border-paper-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        Global Payments Inc.
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        {/* P@TT tile */}
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile sm:col-span-6 lg:col-span-6">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src="https://img.youtube.com/vi/JT4W7vzUBMQ/hqdefault.jpg"
              alt="P@TT"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 to-transparent" />
            <span className="absolute right-3 top-3 inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">
              JS → Kotlin
            </span>
          </div>
          <div className="p-4">
            <h4 className="text-base font-bold tracking-tight text-coal-900">
              P@TT — Pay at the Table
            </h4>
            <p className="mt-1 text-sm text-coal-600">
              Greenfield restaurant POS with bill-splitting. Migrated codebase to Kotlin on Clean Architecture.
            </p>
          </div>
        </article>

        {/* Gift App tile */}
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile sm:col-span-6 lg:col-span-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-cinnamon-600 to-clay-600">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-paper-50">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] opacity-80">
                e-Gift · Loyalty
              </p>
              <p className="mt-1 text-2xl font-black uppercase tracking-tight">
                Gift App
              </p>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-base font-bold tracking-tight text-coal-900">
              Gift App — POS add-on
            </h4>
            <p className="mt-1 text-sm text-coal-600">
              Gift card, e-gift &amp; loyalty modules running alongside the payment app on Android terminals.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// Sprout — half-width, dotted-bg Flutter tile
// =====================================================================
function Sprout() {
  return (
    <div className="mt-8">
      <h3 className="border-b border-paper-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        Sprout Solutions
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile sm:col-span-6 lg:col-span-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-cinnamon-200/70 via-paper-100 to-clay-400/20">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(#DC2626 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-700">
                Employee · Mobile
              </p>
              <p className="mt-1 text-2xl font-black uppercase tracking-tight text-coal-900">
                Sprout HR
              </p>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-base font-bold tracking-tight text-coal-900">
              Sprout HR (Flutter)
            </h4>
            <p className="mt-1 text-sm text-coal-600">
              Employee directory + clock-in/out, built from scratch. State management with Provider/BLoC.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// SRDD — 4 quarter-width tiles (mix of image + gradient)
// =====================================================================
function SRDD() {
  return (
    <div className="mt-8">
      <h3 className="border-b border-paper-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        Senior Data Dynamic (SRDD)
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        {/* Sri Sivan */}
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile sm:col-span-6 lg:col-span-3">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src="https://img.youtube.com/vi/lbwBZ9feRKk/hqdefault.jpg"
              alt="Sri Sivan POS"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 to-transparent" />
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Sri Sivan Temple POS</h4>
            <p className="mt-1 text-xs text-coal-600">Plug-and-play Android POS with Nets terminals.</p>
          </div>
        </article>

        {/* M1 Cashless */}
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile sm:col-span-6 lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-coal-900">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 14px, #FCA5A5 14px, #FCA5A5 15px)',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">Desktop · POS</p>
              <p className="mt-1 text-2xl font-black uppercase tracking-tight text-paper-50">M1 Cashless</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">M1 Cashless (.NET)</h4>
            <p className="mt-1 text-xs text-coal-600">Nets terminals + Bixolon printers in C#.</p>
          </div>
        </article>

        {/* EyeFly3D Pix */}
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile sm:col-span-6 lg:col-span-3">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src="https://img.youtube.com/vi/14FkdV9EWHI/hqdefault.jpg"
              alt="EyeFly3D"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 to-transparent" />
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">EyeFly3D Pix</h4>
            <p className="mt-1 text-xs text-coal-600">2D-to-3D pictures on Android (Java) + iOS (Swift).</p>
          </div>
        </article>

        {/* EyeFly3D Vid */}
        <article className="col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile sm:col-span-6 lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-cinnamon-800 via-clay-600 to-coal-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">2D → 3D · Video</p>
              <p className="mt-1 text-2xl font-black uppercase tracking-tight text-paper-50">EyeFly3D Vid</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">EyeFly3D Vid</h4>
            <p className="mt-1 text-xs text-coal-600">Automatic 2D-to-3D video conversion.</p>
          </div>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// Yondu — 8 quarter-width tiles (Globe Telecom era)
// =====================================================================
function Yondu() {
  return (
    <div className="mt-8">
      <h3 className="border-b border-paper-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        Yondu, Inc. (Globe Telecom)
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        {/* Streamwatch Remote */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-coal-900">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cinnamon-600 via-clay-600 to-cinnamon-600" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">Globe · Roku</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-paper-50">Streamwatch</p>
              <p className="mt-0.5 font-mono text-[9px] tracking-[0.3em] text-paper-300">REMOTE</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Streamwatch — Remote</h4>
            <p className="mt-1 text-xs text-coal-600">Android remote for Roku-powered TVs.</p>
          </div>
        </article>

        {/* TV Channels */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-coal-900">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cinnamon-600 via-clay-600 to-cinnamon-600" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">BrightScript</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-paper-50">TV Channels</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Streamwatch — TV Channels</h4>
            <p className="mt-1 text-xs text-coal-600">Roku channel app in BrightScript.</p>
          </div>
        </article>

        {/* Punch Card */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-bl from-clay-400/30 via-paper-100 to-cinnamon-300/40">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-700">Loyalty</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-coal-900">Punch Card</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Punch Card — Loyalty</h4>
            <p className="mt-1 text-xs text-coal-600">Barcode-based loyalty for partner brands.</p>
          </div>
        </article>

        {/* Seats */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-cinnamon-200/70 via-paper-100 to-clay-400/20">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(#DC2626 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-700">Booking</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-coal-900">Seats</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Seats — Restaurant Booking</h4>
            <p className="mt-1 text-xs text-coal-600">Reservations for partner restaurants.</p>
          </div>
        </article>

        {/* Leader Summit */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-cinnamon-600 to-clay-600">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-paper-50">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] opacity-80">Group Chat</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight">Leader Summit</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Leader Summit App</h4>
            <p className="mt-1 text-xs text-coal-600">FB-style event app for attendees.</p>
          </div>
        </article>

        {/* OFW Call */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-cinnamon-800 via-clay-600 to-coal-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">Emergency</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-paper-50">OFW Call</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">OFW Emergency Call</h4>
            <p className="mt-1 text-xs text-coal-600">Free call app for overseas Filipino workers.</p>
          </div>
        </article>

        {/* CMP Guide */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-coal-900">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 14px, #FCA5A5 14px, #FCA5A5 15px)',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">Enterprise</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-paper-50">CMP Guide</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">CMP Pocket Guide</h4>
            <p className="mt-1 text-xs text-coal-600">Employee directory for emergencies.</p>
          </div>
        </article>

        {/* Labs Caller */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-coal-900">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cinnamon-600 via-clay-600 to-cinnamon-600" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">Dialer</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-paper-50">Labs Caller</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Globe Labs Caller</h4>
            <p className="mt-1 text-xs text-coal-600">Brand logo during overseas calls.</p>
          </div>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// Earlier — 6 third-width tiles (freelance / early career)
// =====================================================================
function Earlier() {
  return (
    <div className="mt-8 pb-6">
      <h3 className="border-b border-paper-300 pb-3 text-xl font-black uppercase tracking-tight text-coal-900">
        Majella · ANVO / Mownecom · earlier freelance
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        {/* Mi-Track */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-bl from-clay-400/30 via-paper-100 to-cinnamon-300/40">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(#DC2626 1px, transparent 1px), linear-gradient(90deg, #DC2626 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-700">GPS · Routing</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-coal-900">Mi-Track</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Mi-Track (Majella 🇦🇺)</h4>
            <p className="mt-1 text-xs text-coal-600">Turn-by-turn route instructions.</p>
          </div>
        </article>

        {/* U-Hop */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-cinnamon-600 to-clay-600">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-paper-50">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] opacity-80">Ride · Hailing</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight">U-Hop</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">U-Hop (ANVO)</h4>
            <p className="mt-1 text-xs text-coal-600">Uber/Grab-style ride-hailing.</p>
          </div>
        </article>

        {/* Lucky 9 */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-cinnamon-800 via-clay-600 to-coal-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">Card Game</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-paper-50">Lucky 9</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Lucky 9 (ANVO/Mownecom)</h4>
            <p className="mt-1 text-xs text-coal-600">C++ on COCOS2D mobile card game.</p>
          </div>
        </article>

        {/* NAVI */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-cinnamon-200/70 via-paper-100 to-clay-400/20">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(#DC2626 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-700">SEO · Utility</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-coal-900">NAVI</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">NAVI Mobile — SEO</h4>
            <p className="mt-1 text-xs text-coal-600">Auto-clicker + finder for site ranking.</p>
          </div>
        </article>

        {/* Attendance */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-bl from-clay-400/30 via-paper-100 to-cinnamon-300/40">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-700">Signature</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-coal-900">Attendance</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Attendance App</h4>
            <p className="mt-1 text-xs text-coal-600">Signature-based attendance with DB sync.</p>
          </div>
        </article>

        {/* Pingpong */}
        <article className="col-span-6 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 shadow-tile lg:col-span-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-coal-900">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 14px, #FCA5A5 14px, #FCA5A5 15px)',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cinnamon-300">Video · Batch</p>
              <p className="mt-1 text-xl font-black uppercase tracking-tight text-paper-50">Pingpong</p>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-bold text-coal-900">Pingpong App</h4>
            <p className="mt-1 text-xs text-coal-600">Batch-download &amp; play company videos.</p>
          </div>
        </article>
      </div>
    </div>
  )
}

// =====================================================================
// AppsView — the actual page
// =====================================================================
function AppsView() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 overflow-x-hidden">

      {/* ============ HEADER ============ */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
            Apps / 03
          </p>
          <h2 className="mt-2 font-black leading-[1.0] tracking-[-0.03em] text-coal-900 text-3xl sm:text-4xl md:text-5xl">
            A decade of <span className="text-cinnamon-600">shipping.</span>
          </h2>
        </div>
        <p className="hidden max-w-sm text-xs text-coal-500 sm:block">
          24 production apps across 9 companies, organized by role. Scroll inside this slide ↓
        </p>
      </div>

      {/* ============ COMPANIES ============ */}
      <Mercola />
      <DOST />
      <VeritasPay />
      <UOB />
      <GlobalPayments />
      <Sprout />
      <SRDD />
      <Yondu />
      <Earlier />

    </div>
  )
}

export default AppsView
