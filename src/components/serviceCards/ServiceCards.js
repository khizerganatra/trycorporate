/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Graphic Designer',
      href: '#',
      price: '$48',
      imageSrc: 'servicesLogos/Graphic-Designer-300x300.png',
      imageAlt: 'Our services include stunning logo designs, customized flyers, brochures, postcards, posters, catalogs, and everything you’re required for your brand.',
    },
    {
      id: 2,
      name: 'Indoor Outdoor sign',
      href: '#',
      price: '$35',
      imageSrc: 'servicesLogos/Indoor-Outdoor-sign-300x300.png',
      imageAlt: "We provide you with talented designers to present you with just-for-you- designs considering your style and your property's unique features."
      ,
    },
    {
      id: 3,
      name: 'Offset Printing',
      href: '#',
      price: '$89',
      imageSrc: 'servicesLogos/Offset-Printing-300x300.png',
      imageAlt: 'Our printing services are suitable for every situation. Whether you’re promoting or pivoting your brand.',
    },
    {
      id: 4,
      name: 'Promotional-Product',
      href: '#',
      price: '$35',
      imageSrc: 'servicesLogos/Promotional-Product-Give-away-300x300.png',
      imageAlt: 'We help you to make your brand memorable with our unique and customized promotional products.',
    },
    // More products...
  ]
  
  export default function ServiceCards() {
    return (
      <div className="bg-white mt-6">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="font-bold text-teal-600 text-5xl text-center mb-32 "><span className="text-black" > Our</span> Services</h2>
  
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-1/3 m-auto overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h1 className="mt-6 text-center font-semibold text-gray-700">{product.name}</h1>
                <p className="mt-3 text-center "> {product.imageAlt}</p>
              
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  