export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-bold text-white tracking-widest mb-1">
              HOFN
            </div>
            <div className="text-[10px] tracking-widest uppercase text-white/30">
              Pienhance Co., Ltd.
            </div>
          </div>

          {/* Info */}
          <div className="text-center hidden md:block">
            <div className="text-white/20 text-[10px] tracking-widest uppercase mb-1">
              CEO · 대표이사
            </div>
            <div className="font-serif text-sm text-white/50">
              Jo Sewon · 조세원
            </div>
          </div>

          {/* Vision */}
          <div className="max-w-sm text-right hidden md:block">
            <p className="text-[11px] text-white/25 leading-relaxed">
              AI 기반 개인 맞춤형 스킨케어 플랫폼 및 스마트 뷰티 디바이스를 통한
              글로벌 뷰티 테크 선도
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/15 tracking-wider">
            © 2026 Pienhance Co., Ltd. · HOFN. All rights reserved.
          </p>
          <p className="text-[10px] text-white/10 tracking-widest uppercase">
            Jo Sewon · CEO Branding
          </p>
        </div>
      </div>
    </footer>
  )
}
