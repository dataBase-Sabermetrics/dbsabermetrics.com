<script setup>
import argo from '../assets/argo.jpeg';
import beno from '../assets/Beno.jpeg';
import reinke from '../assets/reinkehead.jpg';

const people = [
  {
    name: 'Drew Beno',
    role: 'Co-Founder',
    job: 'Software Engineer',
    imageUrl:
      beno,
    gitHub: 'https://github.com/drewbeno1',
    linkedinUrl: 'https://www.linkedin.com/in/andrewbeno12/',
  },
  {
    name: 'Brenden Argomaniz',
    role: 'Co-Founder',
    job: 'MiLB Red Sox Pitching Coach',
    imageUrl:
      argo,
    xUrl: 'https://twitter.com/b_argomaniz',
    linkedinUrl: 'https://www.linkedin.com/in/brenden-argomaniz/',
  },
  {
    name: 'Brian Reinke',
    role: 'Data Engineer',
    job: 'Data Engineer',
    imageUrl:
      reinke,
    gitHub: 'https://github.com/breinke27',
    linkedinUrl: 'https://www.linkedin.com/in/brianreinke21/',
  },
]
</script>

<template>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div class="mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
          <p class="mt-4 text-lg leading-8 text-gray-400">Ball Players with a passion for data and tech</p>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <li v-for="person in people" :key="person.name" class="rounded-2xl bg-gray-800 px-8 py-10">
            <img class="mx-auto h-48 w-42 rounded-full md:h-56 md:w-50" :src="person.imageUrl" alt="" />
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{{ person.name }}</h3>
            <p class="text-sm leading-6 text-gray-400">{{ person.job }}</p>
            <ul role="list" class="mt-6 flex justify-center gap-x-6">
              <li>
                <a v-if="person.xUrl" :href="person.xUrl" class="text-gray-400 hover:text-gray-300" target="_blank">
                  <span class="sr-only">X</span>
                  <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                  </svg>
                </a>
                <a v-if="person.gitHub" :href="person.gitHub" class="text-gray-400 hover:text-gray-300" target="_blank">
                  <span class="sr-only">github</span>
                  <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0020 10c0-5.52-4.48-10-10-10z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-300" target="_blank">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </template>
