import { useInView } from '@hooks/useInView'
import page8 from '@assets/page-8.png'

const globalStats = [
  { value: '3+', label: '글로벌 시장', sub: 'Active Markets' },
  { value: '10+', label: '해외 파트너사', sub: 'Global Partners' },
  { value: '200억', label: '연 매출 규모', sub: 'Annual Revenue' },
]

const activities = [
  {
    region: '동남아시아',
    flag: '🌏',
    items: ['베트남 리테일 파트너십', '동남아 컨퍼런스 발표', 'VTV 방송 협력'],
  },
  {
    region: '미주',
    flag: '🌎',
    items: ['미국 Radisson Hotel 인턴십', '글로벌 기술 협력', '북미 시장 리서치'],
  },
  {
    region: '글로벌 Tech',
    flag: '🌐',
    items: ['AI 스킨케어 플랫폼 HOFN', '스마트 뷰티 디바이스', '글로벌 유통 총판'],
  },
]

export default function GlobalActivity() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="global" className="bg-black relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-36">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium block mb-4">
            06 — Global Activity
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            글로벌 사업
            <br />
            <span className="text-[#C9A96E]">네트워크</span>
          </h2>
        </div>

        {/* Main Image */}
        <div
          className={`relative overflow-hidden rounded-sm mb-16 h-72 md:h-96 transition-all duration-1000 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src={page8}
            alt="Global Activity"
            className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Stats overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex flex-wrap gap-12">
              {globalStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-[#C9A96E]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                  <div className="text-[9px] text-white/30 tracking-widest uppercase">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {activities.map((activity, i) => (
            <div
              key={i}
              className="glass-card glow-hover rounded-sm p-7"
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{activity.flag}</span>
                <span className="text-sm font-semibold text-white">{activity.region}</span>
              </div>
              <ul className="space-y-3">
                {activity.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs text-white/40">
                    <span className="text-[#C9A96E]/50 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
