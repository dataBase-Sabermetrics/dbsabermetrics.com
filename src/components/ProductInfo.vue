<script setup>
import { FolderArrowDownIcon, ChartBarIcon, EyeIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Excel Downloads',
    description:
      'We despise those who safeguard data! So, we made it easy for you to download your data in Excel format and to do whatever you want with it.',
    href: '#',
    icon: FolderArrowDownIcon,
  },
  {
    name: 'Custom Stats',
    description:
      "Don't see what you need? We have you covered. Our custom stats feature allows you to come up with your own stats.",
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Access to Scouting Tools',
    description:
      'Are you a college coach looking to find out more about a player? Our scouting tools are here to help you.',
    href: '#',
    icon: EyeIcon,
  }
]
</script>


<template>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">You're in control</h2>
          <div class="flex flex-row">
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Your data is </p>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl italic">your</p>
            <p class="text-3xl font-bold tracking-tight text-white sm:text-4xl">data</p>
          </div>
        <p class="mt-6 text-lg leading-8 text-gray-300">We know how valuable data is in the world of baseball, today. That's why you are in the driver seat with your data when using dataBase Sabermetrics.</p>
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
