import { tabs } from '../../routes/tabs'

interface FooterProps {
  activeIdx: number
  onTabChange: (idx: number) => void
}

function Footer({ activeIdx, onTabChange }: FooterProps) {
  return (
    <footer className="border-t border-paper-300 bg-paper-100/90 backdrop-blur-xl">
      <div
        role="tablist"
        aria-label="Sections"
        className="mx-auto flex h-[72px] sm:h-[88px] md:h-[100px] w-full max-w-2xl items-stretch gap-0 sm:gap-1 md:gap-2 px-1 sm:px-2 md:px-4 py-1.5"
      >
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIdx
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-label={tab.label}
              onClick={() => onTabChange(idx)}
              className={`relative flex flex-1 min-w-0 flex-col items-center justify-center gap-1 sm:gap-1.5 overflow-hidden rounded-[10px] sm:rounded-[14px] px-0.5 sm:px-1 py-1 sm:py-1.5 transition ${
                isActive
                  ? 'text-cinnamon-700'
                  : 'text-coal-400 hover:bg-cinnamon-200/40 hover:text-cinnamon-700'
              }`}
            >
              <span
                className={`inline-flex h-9 w-9 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg sm:rounded-xl border transition ${
                  isActive
                    ? 'border-cinnamon-800 bg-gradient-to-br from-cinnamon-600 to-clay-600 text-white shadow-[0_4px_14px_-4px_rgba(220,38,38,0.55)]'
                    : 'border-paper-300 bg-paper-200'
                }`}
              >
                {tab.icon}
              </span>
              <span className="block w-full truncate text-center font-mono text-[8px] sm:text-[9.5px] md:text-[10.5px] font-bold uppercase leading-none tracking-[0.08em] sm:tracking-[0.12em]">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 left-1/2 h-[3px] w-6 sm:w-8 -translate-x-1/2 rounded-full bg-cinnamon-600" />
              )}
            </button>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
