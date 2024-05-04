<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'
import MainLayout from '../layouts/MainLayout.vue';

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Free Tier',
    id: 'tier-free',
    href: '#',
    price: { monthly: 'Free', annually: 'Free' },
    description: 'The Basics. Perfect for getting started and if you want to do your own analytics.',
    features: ['Pitch Tracker', 'Bullpen Tracker', 'Unlimited Games', 'Your Data Available in Exportable CSV', 'Basic Stats Dashboard'],
    mostPopular: true,
    cta: 'Sign Up for Free'
  },
  {
    name: 'Basic Tier',
    id: 'tier-advanced',
    href: '#',
    price: { monthly: '$20', annually: '$200' },
    description: 'Let your data work for you. Perfect for teams that want to take their analytics and development to the next level.',
    features: ['Pitch Tracker', 'Bullpen Tracker', 'Unlimited Games', 'Your Data Available in Exportable CSV', 'Full Dashboard Access', 'Custom Statistic Building', 'Trend Analysis'],
    mostPopular: false,
    cta: 'Coming Soon'
  },
  {
    name: 'Platinum Tier',
    id: 'tier-platinum',
    href: '#',
    price: { monthly: '$40', annually: '$400' },
    description: 'For those who need the to track, develop, scout and recruit.',
    features: ['Everything in Advanced', 'Scouting Tool', 'Access to Recruiting Database', '24/7 Support', 'Custom Tool Building'],
    mostPopular: false,
    cta: 'Coming Soon'
  },
]

const frequency = ref(frequencies[0])
</script>


<template>
    <MainLayout>
        <div class="py-10 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Pricing plans for every coach, player, team</p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Take advantage of our generous free tier, or dive in and take your squad to the next level with advanced player development or advantageous recruiting access</p>
            <div class="mt-16 flex justify-center">
            <RadioGroup v-model="frequency" class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
                <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
                <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option" v-slot="{ checked }">
                <div :class="[checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1']">
                    <span>{{ option.label }}</span>
                </div>
                </RadioGroupOption>
            </RadioGroup>
            </div>
            <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="tier in tiers" :key="tier.id" :class="[tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10', 'rounded-3xl p-8 xl:p-10']">
                <div class="flex items-center justify-between gap-x-4">
                <h3 :id="tier.id" class="text-lg font-semibold leading-8 text-white">{{ tier.name }}</h3>
                <p v-if="tier.mostPopular" class="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Start Here!</p>
                </div>
                <p class="mt-4 text-sm leading-6 text-gray-300">{{ tier.description }}</p>
                <p class="mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-white">{{ tier.price[frequency.value] }}</span>
                <span class="text-sm font-semibold leading-6 text-gray-300">{{ frequency.priceSuffix }}</span>
                </p>
                <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.mostPopular ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500' : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white', 'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">{{ tier.cta }}</a>
                <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                    <CheckIcon class="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {{ feature }}
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </MainLayout>
  </template>