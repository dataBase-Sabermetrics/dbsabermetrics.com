<script setup>
import { FolderArrowDownIcon, ChartBarIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Data Exports',
    description:
      'Download your data in CSV format and do whatever you want with it. Your data is yours — no lock-in, no gatekeeping.',
    icon: FolderArrowDownIcon,
  },
  {
    name: 'Custom Stats',
    description:
      "Don't see the metric you need? Build your own. Our custom stats feature lets you define and track the numbers that matter most to your program.",
    icon: ChartBarIcon,
  },
]
</script>


<template>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">You're in control</h2>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Your data is your data.</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Data has never been more valuable in baseball than it is today. That is why your data will be safe and readily accessible when you use dataBase Sabermetrics</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div v-for="feature in features" :key="feature.name" class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <component :is="feature.icon" class="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              <dd class="mt-4 text-base leading-7 text-gray-300">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
