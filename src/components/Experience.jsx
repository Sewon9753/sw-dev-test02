import { useInView } from '@hooks/useInView'
import page4 from '@assets/page-4.png'
import page5 from '@assets/page-5.png'

const experiences = [
  {
    period: '2024 — Present',
    company: '파인핸스 (Pienhance Co., Ltd.)',
    brand: 'HOFN',
    role: 'CEO · 대표이사',
    tags: ['AI 스킨케어', '뷰티 디바이스', '플랫폼 사업'],
    highlight: true,
  },
  {
    period: '2018 — 2024',
    company: '제이와이앤인터내셔널 (JYN)',
    brand: 'JYN International',
    role: '대표이사',
    tags: ['글로벌 화장품 유통', 'EV 충전 파트너십', '총판 사업'],
    highlight: false,
  },
  {
    period: '2019 — 2024',
    company: '룩스앤메이 (Looks & May)',
    brand: 'Looks & May',
    role: '글로벌 본부장',
    tags: ['글로벌 사업 확장', '투자 유치', '해외 파트너십'],
    highlight: false,
  },
  {
    period: '2015 — 2018',
    company: '제이비알아이엔티 (JBR INT)',
    brand: 'JBR International',
    role: '대표이사',
    tags: ['전기차 충전 시스템', 'HW 개발', '인프라 구축'],
    highlight: false,
  },
  {
    period: '2013 — 2015',
    company: '제이비알 (JBR)',
    brand: 'JBR',
    role: '대표이사',
    tags: ['통신 사업', 'CCTV', '보안 솔루션'],
    highlight: false,
  },
]

export default function Experience() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="experience" className="bg-[#050505]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-36">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium block mb-4">
            03 — Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            다양한 산업을 아우르는
            <br />
            <span className="text-[#C9A96E]">사업 경험</span>
          </h2>
        </div>

        {/* Reference images row */}
        <div
          className={`grid grid-cols-2 gap-4 mb-16 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="overflow-hidden rounded-sm h-48 md:h-64">
            <img src={page4} alt="Experience" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-sm h-48 md:h-64">
            <img src={page5} alt="Experience Detail" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`glass-card glow-hover rounded-sm p-6 md:p-8 transition-all duration-700 cursor-default ${
                exp.highlight ? 'border-[#C9A96E]/30' : ''
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Period */}
                <div className="md:w-40 shrink-0">
                  <span className="text-[11px] tracking-widest text-white/30 uppercase">
                    {exp.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-10 bg-white/10 shrink-0" />

                {/* Company info */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                    <h3 className={`text-base md:text-lg font-semibold ${exp.highlight ? 'text-[#C9A96E]' : 'text-white'}`}>
                      {exp.company}
                    </h3>
                    <span className="text-[10px] tracking-widest uppercase text-white/30 hidden md:block">
                      · {exp.role}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-white/30 md:hidden block mb-3">
                    {exp.role}
                  </span>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={`text-[10px] tracking-wider px-3 py-1 rounded-full border ${
                          exp.highlight
                            ? 'border-[#C9A96E]/30 text-[#C9A96E]/70'
                            : 'border-white/10 text-white/40'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Current badge */}
                {exp.highlight && (
                  <div className="shrink-0">
                    <span className="text-[9px] tracking-[0.3em] uppercase bg-[#C9A96E]/10 text-[#C9A96E] border border-[#C9A96E]/30 px-3 py-1.5 rounded-full">
                      Current
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
