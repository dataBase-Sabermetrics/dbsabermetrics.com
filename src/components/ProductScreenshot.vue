<script setup>
import { CheckIcon, CloudArrowUpIcon, DeviceTabletIcon, ChartBarIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Only 4 Fields to Fill Out for Each Pitch.',
    description:
      'We pride ourselves on simplicity. We have created a friction-less pitch tracking software that can be done with ease in real time. ',
    icon: CheckIcon,
  },
  {
    name: 'Hundreds of Custom statistics.',
    description: 
      'dataBase automatically calculates out hundreds of metrics and advanced statistics that can be used to inform player development, and if that is not enough there is the capability to create your own custom statistics',
    icon: ChartBarIcon,
  },
  {
    name: 'Mobile Friendly.',
    description: 'Computer, Phone, Tablet, you name it. Our product is designed to be used on the web on any device.',
    icon: DeviceTabletIcon,
  },
  {
    name: 'Player and Team Development.',
    description: 
      'Instantly gain insights into individual player and overall team season-long statistical trends that inform effective in-game decisions.',
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
              <h2 class="text-base font-semibold leading-7 text-indigo-400">The dataBase difference</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better way to track pitches</p>
              <p class="mt-6 text-lg leading-8 text-gray-300">The days of pen-to-paper charts are over. Our innovative pitch tracking software crunches numbers and produces advanced data so you don’t have to.</p>
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