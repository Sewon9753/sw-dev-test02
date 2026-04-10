import { useInView } from '@hooks/useInView'
import page6 from '@assets/page-6.png'

const competencies = [
  {
    icon: '⚡',
    title: 'IT · SW · HW',
    subtitle: '사업 운영',
    desc: '소프트웨어부터 하드웨어까지 통합적인 기술 사업 운영 역량',
  },
  {
    icon: '✦',
    title: '화장품 산업',
    subtitle: '전문성',
    desc: 'K-뷰티 및 글로벌 화장품 시장에 대한 깊은 산업 이해도',
  },
  {
    icon: '◈',
    title: 'EV 충전',
    subtitle: '인프라',
    desc: '전기차 충전 시스템 개발 및 인프라 구축 전문 경험',
  },
  {
    icon: '◎',
    title: '글로벌 유통',
    subtitle: '및 총판',
    desc: '동남아·미주 시장 글로벌 유통 네트워크 및 총판 역량',
  },
  {
    icon: '▲',
    title: '시장 확장',
    subtitle: '연 매출 200억+',
    desc: '스타트업에서 연 매출 200억 규모로 성장시킨 사업 확장 능력',
  },
  {
    icon: '◇',
    title: '플랫폼 전환',
    subtitle: '사업 역량',
    desc: '오프라인 사업을 AI 기반 플랫폼으로 전환하는 혁신 리더십',
  },
]

export default function CoreCompetencies() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="competencies" className="bg-black relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${page6})`, filter: 'grayscale(100%)' }}
      />
      <div className="absolute inset-0 bg-black/92" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-36">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium block mb-4">
            04 — Core Competencies
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            핵심 역량
          </h2>
          <p className="mt-4 text-white/40 text-sm max-w-md mx-auto leading-relaxed">
            다산업 경험에서 축적된 6가지 핵심 전문성
          </p>
        </div>

        {/* Competency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {competencies.map((item, i) => (
            <div
              key={i}
              className={`group glass-card glow-hover rounded-sm p-8 cursor-default
                transition-all duration-700 hover:border-[#C9A96E]/20 hover:bg-white/[0.06] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-2xl text-[#C9A96E]/50 mb-5 group-hover:text-[#C9A96E] transition-colors duration-300">
                {item.icon}
              </div>

              {/* Number */}
              <div className="text-[10px] tracking-widest text-white/20 mb-3">
                0{i + 1}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[11px] tracking-wider uppercase text-[#C9A96E]/50 mb-4">
                {item.subtitle}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-white/10 mb-4 group-hover:w-16 group-hover:bg-[#C9A96E]/40 transition-all duration-300" />

              {/* Desc */}
              <p className="text-xs text-white/35 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
