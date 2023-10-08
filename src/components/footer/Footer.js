import { Inter } from 'next/font/google'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faCoffee, faEnvelope, faMapLocationDot, faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Add the imported icon(s) to the library



const inter = Inter({ subsets: ['latin'] })

export default function Footer() {

  const handleWhatsAppClick = () => {
    // Replace '1234567890' with the recipient's phone number
    const phoneNumber = '+923402111863';

    // Construct the WhatsApp URL
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;

    // Open the WhatsApp URL in a new window or tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="text-gray-600 body-font bg-teal-100">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img
                className="h-16 w-auto"
                src="v.png"
                alt=""
              />
          <span className="ml-3 text-xl">Corporate Mark</span>
        </a>
        <p className="mt-2 text-lg text-gray-500">We are committed to providing high-quality custom printing services in Pakistan. Quality print and timely delivery is our motto.</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      
        <div className="lg:w-1/2 md:w-1/2 w-full px-32">
          <h2 className="title-font font-bold text-lg text-teal-700 tracking-widest  mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li className='pb-3'>
            <FontAwesomeIcon icon={faAngleRight}  color="teal"  className='me-1'/>
              <a className="text-gray-600 hover:text-gray-800 text-sm"> Corporate Photoghaphy</a>
            </li>
            <li className='pb-3'>
            <FontAwesomeIcon icon={faAngleRight}  color="teal"  className='me-1'/>
              <a className="text-gray-600 hover:text-gray-800 text-sm">Giveaway & Promotional Items</a>
            </li>
            <li className='pb-3'>
              <FontAwesomeIcon icon={faAngleRight}  color="teal"  className='me-1'/>
              <a className="text-gray-600 hover:text-gray-800 text-sm">Indoor & Outdoor Signs</a>
            </li>
            <li className='pb-3'>
            <FontAwesomeIcon icon={faAngleRight}  color="teal"  className='me-1'/>
              <a className="text-gray-600 hover:text-gray-800 text-sm">Graphic Design</a>
            </li>
            <li className='pb-3'>
            <FontAwesomeIcon icon={faAngleRight}  color="teal"  className='me-1'/>
              <a className="text-gray-600 hover:text-gray-800 text-sm">Offset Printing</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-lg text-teal-700 tracking-widest  mb-3">CONTACT DETAILS</h2>
          <nav className="list-none mb-10">

            <li className='pb-3'>
              <FontAwesomeIcon icon={faPhoneVolume}  color="teal"  className='me-2'/>
              <a className="text-gray-600 hover:text-gray-800 text-sm">+923402111863</a>
            </li>
           
            <li className='pb-3'>
            <FontAwesomeIcon icon={faEnvelope}  color="teal"  className='me-2'/>
              <a className="text-gray-600 hover:text-gray-800 text-sm">corporatemark.pk@gmail.com</a>
            </li>

            <li className='pb-3'>
            <FontAwesomeIcon icon={faMapLocationDot}  color="teal"  className='me-2'/>
              <a className="text-gray-600 hover:text-gray-800 text-sm">Office # 02, Moin Terrace, I.I Chundrigar Rd, near Jung Press UBL Bank Street, City Railway Colony, Karachi, Karachi City, Sindh 74500</a>
            </li>

            <li className='pb-3 mt-5'>
              <a href='https://www.facebook.com/CorporateMark.pk' target='_blank'><FontAwesomeIcon icon={faFacebookF}  color="teal" size='2x' className='me-9'/></a>
              <a href='https://www.instagram.com/corporatemark.pk/' target='_blank'><FontAwesomeIcon icon={faInstagram}  color="teal"  size='2x' className='me-9'/></a>
              <a href='https://www.linkedin.com/company/corporate-mark/about/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn}  color="teal" size='2x' className='me-6'/></a>
              <button onClick={handleWhatsAppClick} className=''> <FontAwesomeIcon icon={faWhatsapp}  color="teal" size='2x' className='me-1'/></button>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 CM —
          <a href="https://twitter.com/corporateMark" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@KAG</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
      
   
  )
}
