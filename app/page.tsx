import { Header } from "@/components/inspiclinic/header"
import { Hero } from "@/components/inspiclinic/hero"
import { Marquee, MarqueeGold } from "@/components/inspiclinic/marquee"
import { Services } from "@/components/inspiclinic/services"
import { VideoSection } from "@/components/inspiclinic/video-section"
import { Team } from "@/components/inspiclinic/team"
import { Testimonials } from "@/components/inspiclinic/testimonials"
import { About } from "@/components/inspiclinic/about"
import { Gallery } from "@/components/inspiclinic/gallery"
import { Footer } from "@/components/inspiclinic/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <Services />
      <MarqueeGold />
      <VideoSection />
      <Team />
      <Testimonials />
      <About />
      <Gallery />
      <Footer />
    </main>
  )
}
