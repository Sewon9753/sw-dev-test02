import { useInView } from '@hooks/useInView'
import page3 from '@assets/page-3.png'

const timeline = [
  {
    year: '2013',
    company: '제이비알 (JBR)',
    role: '대표이사',
    desc: '통신 및 CCTV 사업 창업, 인프라 솔루션 제공',
    align: 'right',
  },
  {
    year: '2015',
    company: '제이비알아이엔티 (JBR INT)',
    role: '대표이사',
    desc: '전기차 충전 시스템 개발, 차세대 에너지 인프라 구축',
    align: 'left',
  },
  {
    year: '2018',
    company: '제이와이앤인터내셔널 (JYN)',
    role: '대표이사',
    desc: '글로벌 화장품 유통 사업 확장, EV 충전 파트너십 체결',
    align: 'right',
  },
  {
    year: '2019',
    company: '룩스앤메이 (Looks & May)',
    role: '글로벌 본부장',
    desc: '글로벌 사업 확장 총괄, 해외 투자 유치 및 파트너십 구축',
    align: 'left',
  },
  {
    year: '2024',
    company: '파인핸스 (Pienhance)',
    role: '대표이사 · CEO',
    desc: 'AI 스킨케어 플랫폼 HOFN 론칭, 스마트 뷰티 디바이스 사업 선도',
    align: 'right',
    current: true,
  },
]

function TimelineCard({ item, index, inView }) {
  const isRight = item.align === 'right'

  return (
    <div
      className={`relative flex items-center gap-0 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Left side */}
      <div className={`flex-1 ${isRight ? 'pr-12 text-right' : 'pr-12 opacity-0 pointer-events-none'}`}>
        {isRight && (
          <div className="glass-card glow-hover rounded-sm p-6 inline-block max-w-sm">
            <div className="text-[10px] tracking-widest uppercase text-[#C9A96E] mb-2">
              {item.role}
            </div>
            <h3 className="text-base font-semibold text-white mb-2">{item.company}</h3>
            <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="relative flex flex-col items-center shrink-0 w-24">
        <div
          className={`w-3 h-3 rounded-full border-2 z-10 transition-colors duration-300 ${
            item.current
              ? 'border-[#C9A96E] bg-[#C9A96E]'
              : 'border-white/30 bg-black'
          }`}
        />
        <div
          className={`mt-2 text-xl font-serif font-bold transition-colors duration-300 ${
            item.current ? 'text-[#C9A96E]' : 'text-white/20'
          }`}
        >
          {item.year}
        </div>
      </div>

      {/* Right side */}
      <div className={`flex-1 ${!isRight ? 'pl-12 text-left' : 'pl-12 opacity-0 pointer-events-none'}`}>
        {!isRight && (
          <div className="glass-card glow-hover rounded-sm p-6 inline-block max-w-sm">
            <div className="text-[10px] tracking-widest uppercase text-[#C9A96E] mb-2">
              {item.role}
            </div>
            <h3 className="text-base font-semibold text-white mb-2">{item.company}</h3>
            <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CareerTimeline() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="career" className="bg-black relative overflow-hidden">
      {/* Background Reference Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 bg-no-repeat"
        style={{ backgroundImage: `url(${page3})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-36">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium block mb-4">
            02 — Career Timeline
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            비전을 현실로 만든
            <br />
            <span className="text-[#C9A96E]">12년의 여정</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
