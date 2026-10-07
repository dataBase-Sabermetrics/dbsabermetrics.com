<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import Footer from '../components/Footer.vue';
import { BoltIcon, EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'

const highlights = [
  {
    icon: BoltIcon,
    title: 'Live pitch tracking',
    text: 'Log every pitch in real time — simple enough for any volunteer scorer.',
  },
  {
    icon: EnvelopeIcon,
    title: 'Reports delivered to players',
    text: 'Post-game PDFs hit each pitcher\'s inbox the moment the game ends.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Works on any device',
    text: 'Phone, tablet, or laptop — no app download required.',
  },
]
</script>

<template>
  <MainLayout>
    <!-- Hero -->
    <div class="py-28 sm:py-40 lg:pb-48">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Player development,<br />
            <span class="text-indigo-400">powered by data.</span>
          </h1>
          <p class="mt-8 text-xl leading-8 text-gray-300">
            dataBase Sabermetrics delivers intuitive pitch-tracking software and advanced analytics needed to bring your team to the next level. Get in the game, click below to get started!
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact/"
              class="rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started free
            </a>
            <a href="/product/" class="text-sm font-semibold leading-6 text-white">
              See the features <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <img
          src="../assets/DashboardScreenshot.png"
          alt="dataBase analytics dashboard"
          width="2432"
          height="1442"
          class="mt-16 rounded-xl shadow-2xl ring-1 ring-white/10 sm:mt-24"
        />
      </div>
    </div>

    <!-- Feature highlights -->
    <div class="border-t border-white/10 py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div v-for="item in highlights" :key="item.title" class="flex flex-col items-start">
            <div class="rounded-lg bg-indigo-500/10 p-3 ring-1 ring-indigo-500/30">
              <component :is="item.icon" class="h-6 w-6 text-indigo-400" />
            </div>
            <h3 class="mt-4 text-base font-semibold text-white">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-gray-400">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
  <Footer />
</template>
