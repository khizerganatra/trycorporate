import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import HeroSec1 from '@/components/heroSec1/HeroSec1'
import { Inter } from 'next/font/google'
import WhoWeAbout from '@/components/whoWeAbout/WhoWeAbout'
import OurVision from '@/components/ourVision/OurVision'
import OurMission from '@/components/ourMission/OurMission'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen  ${inter.className}`}
    >
      <Header />
      <HeroSec1 />
      <WhoWeAbout/>
      <OurVision/>
      <OurMission/>
      <Footer/>
    </main>
  )
}
