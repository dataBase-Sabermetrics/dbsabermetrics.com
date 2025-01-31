<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import argo from '../assets/argo.jpeg';
const posts = [
   {
     id: 1,
     title: 'Why You Should Aim to Quantify Projectability Beyond High School',
     href: 'https://drewbeno.substack.com/p/db-bytes-1-why-you-should-aim-to?r=4pv5rj&utm_medium=ios&triedRedirect=true',
     description:
       'Data-driven player development in the MLB has been a valuable asset ever since Statcast was introduced back in 2015. Some might argue it dates all the way back to the Moneyball era of the A’s in the early 2000s. So valuing data (whether it’s process- or results-oriented data) isn’t a brand new concept, but the trickle-down to the amateur levels is.',
     date: 'Jan 31, 2025',
     datetime: '2025-01-31',
     category: { title: 'dB Bytes #1', href: 'https://drewbeno.substack.com/p/db-bytes-1-why-you-should-aim-to?r=4pv5rj&utm_medium=ios&triedRedirect=true' },
     author: {
       name: 'Brenden Argomaniz',
       role: 'Co-Founder, Red Sox MiLB Pitching Coach',
       href: '/about/',
       imageUrl:
         argo,
     },
   },
]
</script>

<template>
    <MainLayout>
        <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">dataBase Bytes</h2>
            <p class="mt-2 text-lg leading-8 text-gray-100">Our blog discussing all things Sabermetrics across all levels of baseball. Keep an eye out on our social media for updates!</p>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between hover:bg-slate-800 hover:p-2 hover:rounded-xl">
                <div class="flex items-center gap-x-4 text-xs">
                <time :datetime="post.datetime" class="text-gray-300">{{ post.date }}</time>
                <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100">{{ post.category.title }}</a>
                </div>
                <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-200">
                    <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                    </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">{{ post.description }}</p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4">
                <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-300">
                    <a :href="post.author.href">
                        <span class="absolute inset-0" />
                        {{ post.author.name }}
                    </a>
                    </p>
                    <p class="text-gray-200">{{ post.author.role }}</p>
                </div>
                </div>
            </article>
            </div>
        </div>
        </div>
    </MainLayout>
  </template>
