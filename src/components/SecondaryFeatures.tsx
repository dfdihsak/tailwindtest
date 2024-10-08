'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image' // Importing Image from next/image
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

// Import your product image
import productImage from '@/images/screenshots/product.png'

import { ExclamationTriangleIcon, CursorArrowRaysIcon, DocumentChartBarIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Data',
    description: "from multispectral satellites such as NASA's ASTER and LANDSAT satellites. Supervised machine learning training accomplished with GEOROC's extensive peer-reviewed data",
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Simple',
    description: 'and sleek user experience. Ore prospecting that captures clues beyond surface geological features.',
    icon: CursorArrowRaysIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="product"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Product Overview</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Satellite Discovery</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Using supervised machine learning on known ore deposits, we add an analytical lens to prospecting.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                alt="Product screenshot"
                src={productImage} // Using the imported image as the src
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
