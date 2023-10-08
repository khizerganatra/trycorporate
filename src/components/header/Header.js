import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import React from 'react';



const navigation = [
  { name: 'Home', href: './' },
//   { name: 'Services', href: 'services' },
//   { name: 'Portfolio', href: 'portfolio' },
//   { name: 'Clients', href: 'clients' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' }
]

export default function Header() {

    
        const handleWhatsAppClick = () => {
          // Replace '1234567890' with the recipient's phone number
          const phoneNumber = '+923402111863';
      
          // Construct the WhatsApp URL
          const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
      
          // Open the WhatsApp URL in a new window or tab
          window.open(whatsappUrl, '_blank');
        };
      
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  
//       <header class="text-gray-600 body-font">
//   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//         <Image src={'https://images.unsplash.com/photo-1562307534-a03738d2a81a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'}  className="w-10 h-10 text-white p-2 bg-emerald-500 rounded-full" width={50}/>
//       {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-emerald-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg> */}
//       <span class="ml-3 text-xl"> Corporate Mark</span>
//     </a>
//     <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a class="mr-5 hover:text-gray-900">Home</a>
//       <a class="mr-5 hover:text-gray-900">Services</a>
//       <a class="mr-5 hover:text-gray-900">Portfolio</a>
//       <a class="mr-5 hover:text-gray-900">Clients</a>
//       <a class="mr-5 hover:text-gray-900">About</a>
//       <a class="mr-5 hover:text-gray-900">Contact</a>
//     </nav>
//     <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </header>




 

 
    <div className="bg-white pt-14">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Corporate Mark</span>
              <img
                className="h-16 w-auto"
                src="v.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={handleWhatsAppClick} className='align-baseline flex'> <FontAwesomeIcon icon={faWhatsapp}  color="teal" size='2x' className='me-1'/>WhatsApp</button>
           
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Corporate Mark</span>
                <img
                  className="h-16 w-auto"
                  src="v.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <button onClick={handleWhatsAppClick} className='align-baseline flex'> <FontAwesomeIcon icon={faWhatsapp}  color="teal" size='2x' className='me-1'/>WhatsApp</button>
           
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Corporate Mark
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Where Design Meets Trust. We’re more than a brand development company; we’re architects of memorable experiences. With creativity, expertise, and a commitment to excellence, we craft legendary brands. Explore our services in Designing, Branding, Printing, Signage, and Promotional Products. Join us in the journey of inspiration and transformation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80ffee] to-[#89fcd6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div> */}
    </div>
 

   
  )
}
