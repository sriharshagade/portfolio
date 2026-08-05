"use client";

import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Gradient backdrop for glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 via-transparent to-primary-container/5" />

      {/* Floating card - API response / AI output */}
      <div className="absolute right-0 top-12 z-30 w-72 animate-float rounded-lg border border-outline-variant/40 bg-surface-container/40 backdrop-blur-md">
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">AI Response</span>
            <span className="size-2 rounded-full bg-primary/60" />
          </div>
          <p className="text-xs leading-5 text-on-surface-variant">
            Transformed patient intake workflow, reducing administrative overhead by 67%.
          </p>
        </div>
      </div>

      {/* Center product showcase with subtle frame */}
      <div className="relative mx-auto h-full max-w-md overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-high shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-40" />
        <Image
          alt="AI product dashboard showcase"
          className="h-full w-full object-cover"
          fill
          priority
          sizes="(min-width: 1024px) 400px, 100vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzL5v2Q_rUrceQk7eovl7RgX8AbIeIQ_yKtwzufh69uZ6cCzZ4Qe45AWXxr-8X6TYJModu2ezscATKw3JJOBV1YoWC72p71qJMxaYrO6ohBjuMLHcU0ODjKpb0lqpXV8rXLT7CJWENqed7oEFwkUaG_Vs6MU1oBdbSaxbO7MU0WJg-NJdDRVw6Kby5CoeZUKm4DGVVxs692C6Iqt_O6CIdwxkwkRMUomd7tpl4VLPteuWrGua9XGD6vg"
        />
      </div>

      {/* Floating metrics card - bottom right */}
      <div className="absolute bottom-8 left-0 z-20 w-64 animate-float-delayed rounded-lg border border-outline-variant/40 bg-surface-container/40 backdrop-blur-md">
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Architecture</span>
            <span className="size-2 rounded-full bg-primary/60" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded border border-outline-variant/50 bg-surface-container/40 px-2 py-1">
              <p className="font-mono text-[10px] text-on-surface-variant">Next.js</p>
            </div>
            <div className="rounded border border-outline-variant/50 bg-surface-container/40 px-2 py-1">
              <p className="font-mono text-[10px] text-on-surface-variant">React</p>
            </div>
            <div className="rounded border border-outline-variant/50 bg-surface-container/40 px-2 py-1">
              <p className="font-mono text-[10px] text-on-surface-variant">Python</p>
            </div>
            <div className="rounded border border-outline-variant/50 bg-surface-container/40 px-2 py-1">
              <p className="font-mono text-[10px] text-on-surface-variant">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle accent lines for visual interest */}
      <div className="absolute -right-20 -top-20 size-40 rounded-full border border-outline-variant/10 opacity-30" />
      <div className="absolute -bottom-16 -left-16 size-32 rounded-full border border-primary/5 opacity-20" />
    </div>
  );
}
