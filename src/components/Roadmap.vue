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
    name: 'Hundreds of Ready to Go Statistics.',
    description:
      'dataBase automatically calculates out hundreds of metrics and advanced statistics that can be used to inform player development, and if that is not enough there is the capability to create your own custom statistics',
    icon: ChartBarIcon,
  },
  {
    name: 'Mobile Friendly.',
    description: 'Computer, Phone, Tablet, you name it. Our product is designed to be used on the web on any device.',
    icon: DeviceTabletIcon,
  },
]
</script>

<template>
    <div class="relative w-full h-[200vh]">
      <!-- Timeline Line -->
      <div class="absolute top-0 left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>
  
      <!-- Timeline Points -->
      <div
        v-for="(point, index) in timeline"
        :key="index"
        class="absolute w-full flex justify-center"
        :style="{
          top: `${index * 20 + 10}vh`, /* Spacing between timeline points */
          transform: `translateX(${calculateTranslateX(index)}px)` /* Horizontal movement */
        }"
      >
        <div class="bg-white shadow-md rounded-lg p-4 w-64 text-center">
          <h3 class="text-lg font-bold mb-2">{{ point.title }}</h3>
          <p class="text-sm text-gray-500">{{ point.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrollY: 0,
        timeline: [
          { title: "V 0.1", description: "+ Team Registration + User Registration + Add Player Feature + Game Tracking (Pitch Type, Velo, Location, Result)" },
          { title: "V 0.5", description: "" },
          { title: "V 0.7", description: "Major Features" },
          { title: "V 0.01", description: "Enhancements" },
          { title: "V 0.9", description: "Coming Soon" }
        ]
      };
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scrollY = window.scrollY;
      },
      calculateTranslateX(index) {
        // Make each timeline point move horizontally based on the scroll position
        return -this.scrollY * 0.2 * (index + 1); // Adjust multiplier for speed
      }
    }
  };
  </script>
