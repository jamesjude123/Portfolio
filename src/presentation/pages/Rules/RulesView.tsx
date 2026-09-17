// =====================================================================
// Types
// =====================================================================
interface Principle {
  number: string
  label: string
  title: string
  description: string
  isDark: boolean
}

// =====================================================================
// Data — 6 principles
// =====================================================================
const principles: Principle[] = [
  {
    number: '01',
    label: 'Architecture',
    title: 'Clean Architecture or no architecture.',
    description:
      'Every codebase he touches ends up modular, testable, and boring in the best way. Boring code ships at 3am.',
    isDark: false,
  },
  {
    number: '02',
    label: 'Production',
    title: 'Production is the only environment that counts.',
    description:
      'CI/CD, Helm charts, Terraform modules. He designs for repeatable deploys, not for demo days.',
    isDark: true,
  },
  {
    number: '03',
    label: 'Mentorship',
    title: 'Mentor more than you correct.',
    description:
      'Led juniors through code reviews, architecture deep-dives, and pair programming. Their next promotion is part of his job.',
    isDark: true,
  },
  {
    number: '04',
    label: 'AI',
    title: 'AI is a teammate, not a shortcut.',
    description:
      'Pairs with Claude, ChatGPT, Gemini and Codex daily — buys back hours for architecture and people.',
    isDark: false,
  },
  {
    number: '05',
    label: 'Documentation',
    title: 'Documentation is part of "done."',
    description:
      "Runbooks, ADRs, and inline comments make platforms auditable and onboarding-friendly. The next engineer's first day is part of his job.",
    isDark: false,
  },
  {
    number: '06',
    label: 'Observability',
    title: "If you can't see it, you can't fix it.",
    description:
      'Prometheus, Grafana, structured logs, and RBAC go in before traffic does. Operations beats heroics — every time.',
    isDark: true,
  },
]

// Reusable principle tile
function PrincipleTile({ principle }: { principle: Principle }) {
  const wrapperClasses = principle.isDark
    ? 'border-coal-800 bg-coal-900 text-paper-50'
    : 'border-paper-300 bg-paper-50'

  const numberColor = principle.isDark ? 'text-coal-700' : 'text-cinnamon-200/60'

  const labelClasses = principle.isDark
    ? 'font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-cinnamon-300'
    : 'font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700'

  const titleColor = principle.isDark ? 'text-paper-50' : 'text-coal-900'
  const descColor = principle.isDark ? 'text-paper-300' : 'text-coal-600'

  return (
    <div className={`relative col-span-12 overflow-hidden rounded-3xl border p-6 shadow-tile md:col-span-6 ${wrapperClasses}`}>
      {/* Big number in corner */}
      <p className={`absolute -top-2 -right-1 select-none font-mono text-7xl font-bold ${numberColor}`}>
        {principle.number}
      </p>

      {/* Small label */}
      <p className={labelClasses}>{principle.label}</p>

      {/* Title */}
      <h3 className={`mt-2 text-lg font-bold ${titleColor}`}>{principle.title}</h3>

      {/* Description */}
      <p className={`mt-2 text-sm leading-relaxed ${descColor}`}>{principle.description}</p>
    </div>
  )
}

function RulesView() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 overflow-x-hidden">

      {/* ============ HEADER ============ */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
            Principles / 05
          </p>
          <h2 className="mt-2 font-black leading-[1.0] tracking-[-0.03em] text-coal-900 text-3xl sm:text-4xl md:text-5xl">
            Rules he <span className="text-cinnamon-600">lives by.</span>
          </h2>
        </div>
        <p className="hidden max-w-xs text-xs text-coal-500 sm:block">
          Thirteen years of shipping has taught him what holds up under pressure.
        </p>
      </div>

      {/* ============ 6 PRINCIPLE TILES ============ */}
      <div className="mt-6 grid grid-cols-12 gap-3 pb-6">
        {principles.map((p) => (
          <PrincipleTile key={p.number} principle={p} />
        ))}
      </div>

    </div>
  )
}

export default RulesView
