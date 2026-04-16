import { Badge, Surface } from './ui';

export function HeroMap({ title, subtitle, compact = false }: { title: string; subtitle?: string; compact?: boolean }) {
  return (
    <Surface className={compact ? 'overflow-hidden' : 'overflow-hidden'}>
      <div className="relative min-h-[320px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#eaf6ff_0%,#c9f0d8_45%,#dff3c7_100%)]">
        <div className="absolute inset-0 opacity-90" style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.25) 0 3px, transparent 4px), radial-gradient(circle at 50% 18%, rgba(59,130,246,0.18) 0 2px, transparent 3px), radial-gradient(circle at 76% 44%, rgba(239,68,68,0.22) 0 3px, transparent 4px), radial-gradient(circle at 70% 78%, rgba(16,185,129,0.2) 0 3px, transparent 4px)'
        }} />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/45 to-transparent" />
        <div className="absolute inset-0">
          <svg viewBox="0 0 1200 800" className="h-full w-full opacity-70">
            <path d="M0 120 C170 70, 250 220, 400 170 S690 130, 820 200 S1080 250, 1200 180" fill="none" stroke="#6b7280" strokeWidth="7" strokeLinecap="round" strokeDasharray="12 18" opacity="0.5" />
            <path d="M70 680 C200 520, 350 620, 460 490 S720 330, 840 420 S1030 560, 1120 350" fill="none" stroke="#2563eb" strokeWidth="14" strokeLinecap="round" opacity="0.55" />
            <circle cx="210" cy="540" r="18" fill="#ef4444" />
            <circle cx="420" cy="470" r="18" fill="#ef4444" />
            <circle cx="610" cy="355" r="18" fill="#ef4444" />
            <circle cx="860" cy="420" r="18" fill="#ef4444" />
            <circle cx="1040" cy="290" r="18" fill="#ef4444" />
          </svg>
        </div>

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <Badge>Live map</Badge>
          <Badge>Route aware</Badge>
          <Badge>Mobile + desktop</Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/50 bg-white/80 p-4 backdrop-blur-md">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
          </div>
        </div>
      </div>
    </Surface>
  );
}
