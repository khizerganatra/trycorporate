import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HeroSec1() {
  return (
  
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                 <img class="object-cover object-center rounded" alt="hero" src="v.png" />
            </div>

            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Corporate Mark
            </h1>
                <p class="mb-8 leading-relaxed p-4">Where Design Meets Trust. We’re more than a brand development company; we’re architects of memorable experiences. With creativity, expertise, and a commitment to excellence, we craft legendary brands. Explore our services in Designing, Branding, Printing, Signage, and Promotional Products. Join us in the journey of inspiration and transformation.</p>
            
            </div>
        </div>
    </section>

   
  )
}
