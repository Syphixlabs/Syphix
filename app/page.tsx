import { StarfieldBackground } from "@/components/starfield-background"
import { LiquidLogo } from "@/components/liquid-logo"
import { KineticHeadline } from "@/components/kinetic-headline"
import { PulsingCTA } from "@/components/pulsing-cta"
import { FloatingParticles } from "@/components/floating-particles"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
    
      <StarfieldBackground />

    
      <FloatingParticles />

    
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-16 py-12 px-6 md:py-16 md:px-12 max-w-4xl">
    
          <LiquidLogo />

      
          <KineticHeadline />

      
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <PulsingCTA href="https://t.me/Syphixlabs">Join Syphix</PulsingCTA>
          </div>

          
          <p className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase mt-8">Redirecting to the future</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/50 to-transparent z-5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/40 to-transparent z-5 pointer-events-none" />
    </main>
  )
}
