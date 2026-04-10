import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import Profile from '@components/Profile'
import CareerTimeline from '@components/CareerTimeline'
import Experience from '@components/Experience'
import CoreCompetencies from '@components/CoreCompetencies'
import Portfolio from '@components/Portfolio'
import GlobalActivity from '@components/GlobalActivity'
import MediaPartnership from '@components/MediaPartnership'
import Footer from '@components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Profile />
      <CareerTimeline />
      <Experience />
      <CoreCompetencies />
      <Portfolio />
      <GlobalActivity />
      <MediaPartnership />
      <Footer />
    </div>
  )
}
