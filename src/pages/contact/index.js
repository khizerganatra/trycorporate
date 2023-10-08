import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { Inter } from 'next/font/google'
import ContactHero1 from '@/components/contactHero1/ContactHero1'
import ContactMap from '@/components/contactMap/ContactMap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen  ${inter.className}`}
    >
      <Header />
    <ContactHero1/>
    <ContactMap/>
      
     
      <Footer/>
    </main>
  )
}
