<script setup>
import { FolderArrowDownIcon, ChartBarIcon, EyeIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Excel Downloads',
    description:
      'We despise those who safeguard data! So, we made it easy for you to download your data in Excel format and to do whatever you want with it.',
    href: '/contact/',
    icon: FolderArrowDownIcon,
  },
  {
    name: 'Custom Stats',
    description:
      "Don't see what you need? We have you covered. Our custom stats feature will allow you to build your own stats.",
    href: '/contact/',
    icon: ChartBarIcon,
  },
  {
    name: 'Access to Scouting Tools',
    description:
      'Coming Soon: Are you a college coach looking to find out more about a player? Check our road map for our recruiting plans.',
    href: '/contact/',
    icon: EyeIcon,
  }
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
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <component :is="feature.icon" class="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p class="flex-auto">{{ feature.description }}</p>
                <p class="mt-6">
                  <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
