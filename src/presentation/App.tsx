import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Marquee from './components/layout/Marquee'
import { tabs } from './routes/tabs'

function App() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="fixed inset-0 grid grid-cols-1 grid-rows-[auto_auto_1fr_auto] overflow-x-hidden bg-paper-100 text-coal-900">
      <Header />
      <Marquee />
      <main className="overflow-y-auto overflow-x-hidden">
        {tabs[activeIdx].view}
      </main>
      <Footer activeIdx={activeIdx} onTabChange={setActiveIdx} />
    </div>
  )
}

export default App
