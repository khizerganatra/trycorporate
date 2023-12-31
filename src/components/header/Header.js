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
  
    // 
 
    <div className="bg-white pt-14 " style={{backgroundColor: '#0068B7' , color:'#fff'}} >
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="./" className="-m-1.5 p-1.5">
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
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6  text-gray-900 underline-offset-4" style={{fontFamily:'Merienda'}}> 
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={handleWhatsAppClick} className='align-baseline flex'> <FontAwesomeIcon icon={faWhatsapp}  color="white" size='2x' className='me-1'/>WhatsApp</button>
           
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="./" className="-m-1.5 p-1.5">
                <span className="sr-only">Corporate Mark</span>
                <img
                  className="h-16 w-auto"
                  src="vwhite.png"
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
                      style={{fontFamily:'Merienda'}}
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
                    <button onClick={handleWhatsAppClick} className='align-baseline flex'> <FontAwesomeIcon icon={faWhatsapp}  color="green" size='2x' className='me-1'/>WhatsApp</button>
           
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      
    </div>
 

   
  )
}
