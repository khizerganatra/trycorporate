import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HeroSec1() {
  return (
  
        <section class="text-gray-600 body-font " style={{backgroundColor:'#0068B7'}}>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                 <img class="object-cover object-center rounded" alt="hero" src="v.png" />
            </div>

            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-6xl" style={{ fontFamily: 'Roboto,' }}>
              CORPORATE <span className='text-white' > MARK</span>
            </h1>
                <p class="mb-8 leading-relaxed p-4 text-blue-200">Elevate your brand's identity with our comprehensive suite of services. From marketing strategies to branding, our solutions are tailored to enhance brand recognition, foster trust, and leave a lasting impression on your target audience.</p>
            
            </div>
        </div>
    </section>

   
  )
}
