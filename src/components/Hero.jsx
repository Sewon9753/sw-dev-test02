import { useEffect, useState } from 'react'
import page1 from '@assets/page-1.png'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${page1})` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#C9A96E]" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium">
            HOFN · Pienhance Co., Ltd.
          </span>
          <div className="w-8 h-px bg-[#C9A96E]" />
        </div>

        {/* Name */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-4">
          Jo Sewon
        </h1>
        <p className="font-serif text-2xl md:text-3xl text-white/60 italic mb-2">
          조세원
        </p>

        {/* Title */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-10">
          <div className="w-12 h-px bg-white/20" />
          <span className="text-[13px] tracking-[0.5em] uppercase text-white/60 font-medium">
            Chief Executive Officer
          </span>
          <div className="w-12 h-px bg-white/20" />
        </div>

        {/* Vision */}
        <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl mx-auto font-light">
          AI 기반 개인 맞춤형 스킨케어 플랫폼 및 스마트 뷰티 디바이스를 통한
          <br className="hidden md:block" />
          <span className="text-[#C9A96E]"> 글로벌 뷰티 테크 선도</span>
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
