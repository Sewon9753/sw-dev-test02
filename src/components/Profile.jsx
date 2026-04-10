import { useInView } from '@hooks/useInView'
import page2 from '@assets/page-2.png'

const profileItems = [
  { label: '생년월일', value: '1979. 02. 04' },
  { label: '학력', value: '단국대학교 영어학과' },
  { label: '글로벌 경험', value: '미국 Radisson Hotel 인턴십 (1년 6개월)' },
  { label: '현직', value: 'CEO · 파인핸스 (Pienhance Co., Ltd.)' },
  { label: '브랜드', value: 'HOFN — AI 뷰티 테크 플랫폼' },
]

export default function Profile() {
  const [ref, inView] = useInView()

  return (
    <section id="profile" className="bg-[#050505]">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-36"
      >
        {/* Section Label */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium">
            01 — About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={page2}
                alt="Jo Sewon Profile"
                className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Gold accent border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A96E] to-transparent" />
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A96E] to-transparent" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-sm p-5 hidden md:block">
              <div className="text-3xl font-serif font-bold text-[#C9A96E]">12+</div>
              <div className="text-[10px] tracking-widest uppercase text-white/40 mt-1">Years of Leadership</div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              조세원
            </h2>
            <p className="font-serif text-xl text-[#C9A96E] italic mb-8">
              Jo Sewon
            </p>

            <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-md">
              IT·화장품·전기차 충전 등 다양한 산업을 선도해 온 경험을 바탕으로,
              AI 기반 뷰티 테크 플랫폼을 통해 글로벌 시장을 개척하고 있는
              연쇄 창업가이자 비전리더입니다.
            </p>

            {/* Profile items */}
            <div className="space-y-5">
              {profileItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-6 transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <div className="w-28 shrink-0">
                    <span className="text-[10px] tracking-widest uppercase text-[#C9A96E]/60 font-medium">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1 border-b border-white/5 pb-4">
                    <span className="text-sm text-white/70">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
