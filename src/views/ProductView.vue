<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import Footer from '../components/Footer.vue';
import {
  ChartBarIcon,
  EnvelopeIcon,
  BoltIcon,
  BeakerIcon,
  ArrowDownTrayIcon,
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/vue/24/outline'

const featureCards = [
  { icon: BoltIcon, title: 'In-Game Pitch Tracking', text: 'Four fields, real time. Log every pitch without missing a beat.' },
  { icon: BeakerIcon, title: 'Bullpen Tracking & Analysis', text: 'Intended vs. actual location on every bullpen pitch.' },
  { icon: ChartBarIcon, title: 'Full Analytics Dashboard', text: 'Hundreds of stats, zone charts, and trend lines — always current.' },
  { icon: EnvelopeIcon, title: 'Player Reports by Email', text: 'Post-game PDFs delivered to every pitcher immediately after the game.' },
  { icon: ArrowDownTrayIcon, title: 'CSV Export', text: 'Your data, your way. Download everything with one click.' },
  { icon: AdjustmentsHorizontalIcon, title: 'Custom Stats', text: 'Define and track the metrics that matter most to your program.' },
]
</script>

<template>
  <MainLayout>

    <!-- Page hero -->
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">The full platform</h2>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Everything your program needs</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            One platform for tracking pitches, developing players, and keeping every arm on your staff informed — without breaking the budget.
          </p>
        </div>

        <!-- Feature card grid -->
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div
            v-for="f in featureCards"
            :key="f.title"
            class="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
          >
            <component :is="f.icon" class="h-7 w-7 text-indigo-400" />
            <h3 class="mt-4 text-base font-semibold text-white">{{ f.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-gray-400 flex-1">{{ f.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Dashboard deep-dive -->
    <div class="overflow-hidden border-t border-white/10 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <h2 class="text-base font-semibold leading-7 text-indigo-400">The dashboard</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hundreds of stats at a glance
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              The moment a game ends, every pitch is already accounted for. Coaches and players can drill into release-point charts, zone maps, pitch-mix breakdowns, and trend lines — across a single outing or an entire season.
            </p>
            <ul class="mt-8 space-y-3 text-sm leading-7 text-gray-300">
              <li class="flex gap-x-3"><span class="font-semibold text-indigo-400">→</span> Per-game and season-level breakdowns</li>
              <li class="flex gap-x-3"><span class="font-semibold text-indigo-400">→</span> Strike-zone charts and pitch-type splits</li>
              <li class="flex gap-x-3"><span class="font-semibold text-indigo-400">→</span> Performance trend lines over time</li>
              <li class="flex gap-x-3"><span class="font-semibold text-indigo-400">→</span> Pitcher, catcher, and team-level views</li>
            </ul>
          </div>
          <img
            src="../assets/DashboardScreenshot.png"
            alt="dataBase analytics dashboard"
            class="rounded-xl shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>

    <!-- Post-game email reports -->
    <div class="overflow-hidden border-t border-white/10 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

          <!-- Illustration panel -->
          <div class="flex flex-col items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 py-20 px-10 lg:order-1">
            <div class="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/40">
              <EnvelopeIcon class="h-10 w-10 text-indigo-400" />
            </div>
            <p class="mt-6 text-2xl font-bold text-white text-center">Report delivered.</p>
            <p class="mt-2 text-sm text-gray-400 text-center">Before they leave the field.</p>
            <div class="mt-8 w-full max-w-xs rounded-xl bg-white/10 p-4 ring-1 ring-white/20 space-y-2">
              <p class="text-xs text-gray-400 uppercase tracking-widest">New email</p>
              <p class="text-sm font-semibold text-white">Game Report — J. Smith vs Riverside (Oct 6)</p>
              <p class="text-xs text-gray-400">from: dataBase Sabermetrics · 1 attachment</p>
            </div>
          </div>

          <div class="lg:order-2">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">Post-game reports</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              In the inbox before they leave the field
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              When the game ends, dataBase generates a personalized PDF report for each pitcher and emails it directly to them — no portal to log into, no file to forward. Players get their data the same way they get everything else: in their inbox.
            </p>
            <p class="mt-4 text-lg leading-8 text-gray-300">
              Every report covers pitch usage, zone charts, and performance notes so players can review their outing the moment they get home. Development doesn't wait until next practice.
            </p>
            <ul class="mt-8 space-y-3 text-sm leading-7 text-gray-300">
              <li class="flex gap-x-3"><span class="font-semibold text-indigo-400">→</span> One PDF per pitcher, automatically generated</li>
              <li class="flex gap-x-3"><span class="font-semibold text-indigo-400">→</span> Sent immediately after game submission</li>
              <li class="flex gap-x-3"><span class="font-semibold text-indigo-400">→</span> No player login required</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- In-game tracking -->
    <div class="overflow-hidden border-t border-white/10 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <h2 class="text-base font-semibold leading-7 text-indigo-400">In-game tracking</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple enough for any dugout
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              Four fields. That's it. Log the pitch type, velocity, location, and result in real time — no special hardware, no laptop on the bench.
            </p>
            <p class="mt-4 text-lg leading-8 text-gray-300">
              We built tracking to be fast enough to keep up with live at-bats, so coaches can focus on the game. The data handles itself in the background.
            </p>
          </div>
          <img
            src="../assets/TrackScreenshot.png"
            alt="In-game pitch tracking interface"
            class="rounded-xl shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>

    <!-- Bullpen tracking -->
    <div class="overflow-hidden border-t border-white/10 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <img
            src="../assets/PenScreenshot.png"
            alt="Bullpen session tracking"
            class="rounded-xl shadow-2xl ring-1 ring-white/10"
          />
          <div>
            <h2 class="text-base font-semibold leading-7 text-indigo-400">Bullpen sessions</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't let the pen go to waste
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              Bullpens are the most frequent reps a pitcher gets — yet most programs track nothing from them. dataBase captures intended vs. actual location on every pitch so you can measure command development, not just velocity.
            </p>
            <p class="mt-4 text-lg leading-8 text-gray-300">
              Over time, bullpen data reveals patterns that game logs alone never could: which locations a pitcher avoids under pressure, how command holds up late in a session, and where the work needs to focus next.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- More features strip -->
    <div class="border-t border-white/10 py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12">
          <h2 class="text-2xl font-bold tracking-tight text-white">And a lot more</h2>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div class="flex gap-x-4">
            <ArrowDownTrayIcon class="h-6 w-6 flex-shrink-0 text-indigo-400 mt-1" />
            <div>
              <h3 class="text-sm font-semibold text-white">CSV Export</h3>
              <p class="mt-1 text-sm text-gray-400">Download your data any time. No lock-in, no gatekeeping — it's yours.</p>
            </div>
          </div>
          <div class="flex gap-x-4">
            <AdjustmentsHorizontalIcon class="h-6 w-6 flex-shrink-0 text-indigo-400 mt-1" />
            <div>
              <h3 class="text-sm font-semibold text-white">Custom Stats</h3>
              <p class="mt-1 text-sm text-gray-400">Build and name your own metrics. Track the numbers your program actually cares about.</p>
            </div>
          </div>
          <div class="flex gap-x-4">
            <DevicePhoneMobileIcon class="h-6 w-6 flex-shrink-0 text-indigo-400 mt-1" />
            <div>
              <h3 class="text-sm font-semibold text-white">Mobile Friendly</h3>
              <p class="mt-1 text-sm text-gray-400">Phone, tablet, laptop — the whole platform runs in a browser on any device.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="border-t border-white/10 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          The free tier includes full pitch tracking and unlimited game history — no credit card required.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/contact/"
            class="rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Sign up free
          </a>
          <a href="/testimonials/" class="text-sm font-semibold leading-6 text-white">
            See what coaches say <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

  </MainLayout>
  <Footer />
</template>
