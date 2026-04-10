import { useInView } from '@hooks/useInView'
import page9 from '@assets/page-9.png'

const mediaItems = [
  {
    category: 'MOU',
    title: 'Cat Tien Sa MOU',
    desc: '베트남 현지 주요 기업과의 전략적 업무 협약 체결',
    tag: 'Partnership',
  },
  {
    category: 'Broadcast',
    title: 'VTV 방송 협력',
    desc: '베트남 국영방송 VTV와의 공동 제작 및 방송 협력',
    tag: 'Media',
  },
  {
    category: 'Content',
    title: '뷰티 프로그램 제작',
    desc: '베트남 현지 뷰티 프로그램 기획 및 제작 총괄',
    tag: 'Production',
  },
  {
    category: 'Global',
    title: '글로벌 콘텐츠',
    desc: '다국가 타겟 글로벌 콘텐츠 제작 및 파트너십 운영',
    tag: 'Content',
  },
]

export default function MediaPartnership() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="media" className="bg-[#050505]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-36">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium block mb-4">
            07 — Media & Partnership
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            미디어 &
            <br />
            <span className="text-[#C9A96E]">파트너십</span>
          </h2>
        </div>

        {/* Main Image */}
        <div
          className={`relative overflow-hidden rounded-sm mb-16 h-80 md:h-[480px] transition-all duration-1000 delay-100 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
        >
          <img
            src={page9}
            alt="Media & Partnership"
            className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          {/* Label */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <p className="text-[10px] tracking-widest uppercase text-[#C9A96E]/60 mb-2">
              Global Partnership
            </p>
            <h3 className="text-xl md:text-3xl font-serif font-bold text-white">
              베트남 · 동남아 미디어
            </h3>
            <p className="text-sm text-white/40 mt-1">
              VTV · Cat Tien Sa · Global Content
            </p>
          </div>
        </div>

        {/* Media Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mediaItems.map((item, i) => (
            <div
              key={i}
              className={`glass-card glow-hover rounded-sm p-7 md:p-8 group cursor-default transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-[10px] tracking-widest uppercase text-[#C9A96E]/50 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {item.category}
                </span>
                <span className="text-[9px] tracking-wider px-2.5 py-1 border border-white/10 text-white/30 rounded-full">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-white mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                {item.title}
              </h3>

              <div className="w-6 h-px bg-white/10 mb-4 group-hover:w-12 group-hover:bg-[#C9A96E]/40 transition-all duration-300" />

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
