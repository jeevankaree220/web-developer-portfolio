import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
const features = [
    {
      name: 'GreyMetrics',
      description: 'Very good experience on using this',
      url: "/logos/html.svg",
    },
    {
      name: 'Aquo Digital',
      description: 'Very good experience on using this',
      url: "/logos/css.svg",
    },
    {
      name: 'Amaze Heaters',
      description: 'Very good experience on using this',
      url: "/logos/javascript.svg",
    },
    {
      name: 'Mapminds',
      description: 'Very good experience on using this',
      url: "/logos/react.svg",
    },
    {
      name: 'VideoForm',
      description: 'Very good experience on using this',
      url: "/logos/next.svg",
    },
    {
      name: 'Dubai Driving Center',
      description: 'Very good experience on using this',
      url: "/logos/vue.svg",
    },
    {
      name: 'Vijaya Diagnostic Center',
      description: 'Very good experience on using this',
      url: "/logos/angular.svg",
    },
    {
      name: 'Sites60',
      description: 'Very good experience on using this',
      url: "/logos/bootstrap.svg",
    },
    {
      name: 'QR Cafe',
      description: 'Very good experience on using this',
      url: "/logos/tailwind.svg",
    },
  ]

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-slate-800 h-screen">
       <main className="relative h-full">
           <div className="absolute top-5 left-2 flex justify-start">
              <Link href="/">
              <h1 className="text-xl font-extrabold tracking-tight text-slate-800 sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl flex items-center space-x-3">
              <span className="block text-slate-400 bg-slate-600 rounded-2xl px-2 sm:px-6 py-1 sm:py-3 xl:inline font-pacifico font-normal shadow-md ">J</span>
              {/* <span className="block text-slate-800 bg-yellow-300 rounded-2xl px-2 py-1 xl:inline">&lt;Jeevan Karee&gt;</span> */}
            </h1>                <img
                  className="sr-only h-10 w-full sm:h-14 rounded-full"
                  src="/images/logo.png"
                  alt=""
                />
              </Link>
            </div>
        <div className="mx-auto h-full sm:grid sm:items-center sm:justify-center justify-center  text-center flex-1 items-start w-full max-w-full sm:pt-16 sm:pb-20 pt-20 pb-10 lg:py-20">
          {/* <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16"> */}
            <h1 className="text-2xl sm:justify-center justify-center px-2 sm:px-6 py-1 sm:py-3 tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl flex items-center space-x-3">
              <span className="block xl:inline font-extrabold">Hi, I am </span>{' '}
              <span className="block text-slate-300 bg-slate-600 rounded-2xl  xl:inline font-pacifico px-2 sm:px-6 py-1 sm:py-3">Jeevan Karee</span>
              {/* <span className="block text-slate-800 bg-yellow-300 rounded-2xl px-2 py-1 xl:inline">&lt;Jeevan Karee&gt;</span> */}
            </h1>
            <p className="mt-3 max-w-md text-lg text-slate-400 sm:text-xl md:mt-5 md:max-w-3xl">
              I am a Web Developer, I have 7+ years of <code className='text-red-500'>&#60;Web Application Developer&#62;</code> experience working for B2B SaaS Startups  🚀
              {/* I am a Frontend Developer, CSS Expert (HTML, CSS, JavaScript(ES6+), JQuery, React, Next.js, Vue, Nuxt.js, Angular, Ejs, TailwindCSS, Bootstrap) */}
            </p>
            <div className="mt-10 sm:flex flex sm:justify-center justify-center sm:space-x-6 space-x-2">
              <div className="">
                <button className="flex rounded-md sm:shadow-lg shadow-none sm:w-full items-center justify-center rounded-md border border-transparent bg-[#007bb5] px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-5'><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>

                </button>
              </div>
              <div className="">
                <a
                  href="#"
                  className="flex rounded-md sm:shadow-lg shadow-none sm:w-full items-center justify-center rounded-md border border-transparent bg-[#55ACEE] px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5'><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                </a>
              </div>
              <div className="">
                <a target="_blank" rel="noopener noreferrer"
                  href="https://codepen.io/jeevankaree/pens/showcase"
                  className="flex rounded-md sm:shadow-lg shadow-none sm:w-full items-center justify-center rounded-md border border-transparent bg-slate-700 px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
                >
                  <svg viewBox="0 0 138 26" fill="none" className='w-20 h-5' stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" title="CodePen"><path d="M15 8a7 7 0 100 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0l11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 010 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 000-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
                </a>
              </div>
              <div className="">
                <a target="_blank" rel="noopener noreferrer"
                  href="https://codepen.io/jeevankaree/pens/showcase"
                  className="flex rounded-md sm:shadow-lg shadow-none sm:w-full items-center justify-center rounded-md border border-transparent bg-slate-700 px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='w-5 h-5'>
                      <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                </a>
              </div>
            </div>


          {/* </div> */}
        {/* </div>
        <div className="relative h-64 flex items-center w-full sm:h-full md:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 bg-yellow-50"> */}
          <img
            className="h-96 w-96 object-contain m-auto rounded-full "
            src="/images/developer.png"
            alt=""
          />

        </div>
      </main>
      <div className="relative bg-white py-24 sm:py-10 lg:py-14">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <h2 className="text-lg font-semibold text-slate-500">Projects</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Projects that I worked on
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                malesuada. Eleifend condimentum id viverra nulla.
                </p>
                <div className="mt-20">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                        <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div className="-mt-6">
                            <div>
                            <span className="inline-flex items-center justify-center rounded-xl bg-white p-3 shadow-lg">
                            <img className="w-8 h-auto" src={feature.url} alt="HTML Logo" />
                            </span>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                            {feature.name}
                            </h3>
                            <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
