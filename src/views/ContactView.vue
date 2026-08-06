<script setup>
import MainLayout from '../layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">

        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Let's get started!</p>
          <p class="mt-6 text-lg leading-8 text-gray-300">Full access to every feature — pitch tracking, advanced analytics, dashboards, and more. Pick the plan that works for your program.</p>
        </div>

        <div class="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Monthly -->
          <div class="flex flex-col rounded-3xl p-10 ring-1 ring-white/10 bg-white/5">
            <div>
              <h3 class="text-xl font-semibold leading-8 text-white">Monthly</h3>
              <p class="mt-3 text-sm leading-6 text-gray-400">Full access, billed monthly. Cancel anytime.</p>
              <p class="mt-8 flex items-baseline gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-white">$20</span>
                <span class="text-sm font-semibold leading-6 text-gray-400">/ month</span>
              </p>
              <a
                href="https://app.dbsabermetrics.com/signup/"
                target="_blank"
                class="mt-8 block rounded-md bg-white/10 py-3 px-4 text-center text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >Get started</a>
            </div>
            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 border-t border-white/10 pt-8">
              <li v-for="feature in ['Pitch Tracker', 'Bullpen Tracker', 'Unlimited Games', 'Full Dashboard Access', 'Exportable CSV Data', 'Trend Analysis']" :key="feature" class="flex gap-x-3">
                <svg class="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg>
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Annual -->
          <div class="flex flex-col rounded-3xl p-10 ring-2 ring-indigo-500 bg-indigo-500/5">
            <div>
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold leading-8 text-white">Annual</h3>
                <span class="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">Best value</span>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-400">Full access, billed once a year. Save $90 a year vs. monthly.</p>
              <p class="mt-8 flex items-baseline gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-white">$150</span>
                <span class="text-sm font-semibold leading-6 text-gray-400">/ year</span>
              </p>
              <a
                href="https://app.dbsabermetrics.com/signup/"
                target="_blank"
                class="mt-8 block rounded-md bg-indigo-500 py-3 px-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 transition-colors"
              >Get started</a>
            </div>
            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 border-t border-indigo-500/30 pt-8">
              <li v-for="feature in ['Pitch Tracker', 'Bullpen Tracker', 'Unlimited Games', 'Full Dashboard Access', 'Exportable CSV Data', 'Trend Analysis']" :key="feature" class="flex gap-x-3">
                <svg class="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mx-auto mt-12 max-w-3xl text-center">
          <p class="text-sm text-gray-400">
            Questions? Email us at
            <a href="mailto:drew@dbsabermetrics.com" class="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">drew@dbsabermetrics.com</a>
          </p>
        </div>

      </div>
    </div>
  </MainLayout>
</template>
