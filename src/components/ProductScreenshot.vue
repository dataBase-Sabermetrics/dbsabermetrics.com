<script setup>
import { CheckIcon, CloudArrowUpIcon, DeviceTabletIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Only 5 Fields to Fill Out for Each Pitch.',
    description:
      'Simplicity is what we are priding our product on. The process is smooth and simple, and you can track your pitches in no time.',
    icon: CheckIcon,
  },
  {
    name: 'Mobile Friendly.',
    description: 'Computer, Phone, Tablet, you name it. Our product is designed to be used on the web on any device.',
    icon: DeviceTabletIcon,
  },
  {
    name: 'Data Security.',
    description: 'Your data is safe with us and will be at the tip of your fingers whenever you need it.',
    icon: CloudArrowUpIcon,
  },
]
</script>

<template>
    <div class="overflow-hidden py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-indigo-400">Be Better</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better way to track pitches</p>
              <p class="mt-6 text-lg leading-8 text-gray-300">We all know what it's like to track a hundred pitches in a single game, take a glance at the sheet, and then throw it away. Using dataBase makes it easy to turn that data into actionable insights.</p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-semibold text-white">
                    <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <img src="../assets/TrackScreenshot.png" alt="Product screenshot" class="w-[35rem] mt-10 max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </template>