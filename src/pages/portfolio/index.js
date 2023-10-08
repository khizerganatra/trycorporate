import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import HeroSec1 from '@/components/heroSec1/HeroSec1'
import { Inter } from 'next/font/google'
import HeroSec2 from '@/components/heroSec2/HeroSec2'
import ServiceCards from '@/components/serviceCards/ServiceCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen  ${inter.className}`}
    >
      <Header />
      <HeroSec1 />
      <HeroSec2 />
      <ServiceCards/>
      <Footer/>
    </main>
  )
}
