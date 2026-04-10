import { useInView } from '@hooks/useInView'
import page7 from '@assets/page-7.png'

const flowSteps = [
  { step: '01', label: '대기', desc: 'Standby' },
  { step: '02', label: '인증', desc: 'Authentication' },
  { step: '03', label: '설정', desc: 'Configuration' },
  { step: '04', label: '진행', desc: 'In Progress' },
  { step: '05', label: '완료', desc: 'Complete' },
]

export default function Portfolio() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="portfolio" className="bg-[#050505]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-36">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium block mb-4">
            05 — Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            전기차 충전
            <br />
            <span className="text-[#C9A96E]">UI/UX 시스템</span>
          </h2>
        </div>

        {/* Main Image - Full Width */}
        <div
          className={`relative overflow-hidden rounded-sm mb-12 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src={page7}
            alt="EV Charging UI/UX System"
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

          {/* Bottom label */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <p className="text-[10px] tracking-widest uppercase text-[#C9A96E]/60 mb-2">
              JBR International · EV Charging Platform
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              스마트 EV 충전 UX 시스템
            </h3>
          </div>
        </div>

        {/* Charging Flow */}
        <div
          className={`transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 text-center">
            Charging Flow Process
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-0">
            {flowSteps.map((item, i) => (
              <div key={i} className="flex md:flex-col items-center gap-4 md:gap-0 flex-1">
                {/* Step block */}
                <div className="flex md:flex-col items-center gap-4 md:gap-3 flex-1 w-full">
                  <div className="glass-card rounded-sm p-4 md:p-5 w-full md:text-center glow-hover group">
                    <div className="text-[10px] tracking-widest text-[#C9A96E]/50 mb-1 group-hover:text-[#C9A96E] transition-colors">
                      {item.step}
                    </div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-[10px] text-white/30 mt-0.5">{item.desc}</div>
                  </div>

                  {/* Arrow connector */}
                  {i < flowSteps.length - 1 && (
                    <div className="text-[#C9A96E]/30 text-lg md:hidden">↓</div>
                  )}
                </div>

                {/* Horizontal arrow for desktop */}
                {i < flowSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-8 shrink-0 mt-0">
                    <svg width="16" height="8" viewBox="0 0 16 8" className="text-[#C9A96E]/30">
                      <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
