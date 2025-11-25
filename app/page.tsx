import { StarfieldBackground } from "@/components/background"
import { LiquidLogo } from "@/components/logo"
import { KineticHeadline } from "@/components/headline"
import { PulsingCTA } from "@/components/pulsing"
import { FloatingParticles } from "@/components/particles"

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
      
      <footer className="absolute bottom-0 left-0 right-0 z-20 pb-6 flex justify-center">
        <a
          href="https://github.com/Syphixlabs/Syphix"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white/80 text-xs font-mono tracking-wider transition-all duration-300 hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            SOURCE CODE
          </span>
        </a>
      </footer>
    </main>
  )
}
