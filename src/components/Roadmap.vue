<script setup>
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/vue/20/solid"

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
          { 
          title: "V 0.01", 
          added: "Excel/Computer Based Pitch Tracking", 
          icon: PlusCircleIcon,
          removed: "",
          icon: MinusCircleIcon,
          },
          { 
          title: "V 0.1", 
          added: "New Team Registration, User Registration, Add-Player Feature, Game Tracking (Pitch Type, Velo, Location, Result)", 
          icon: PlusCircleIcon,
          removed: "Laggy Buttons, Python Requirement to run",
          icon: MinusCircleIcon,
          },
          { 
          title: "V 0.5", 
          added: "New User Interface, Pitch Location Tracking, Pitch Type Options",
          icon: PlusCircleIcon,
          removed: "",
          icon: MinusCircleIcon,

          },
          { 
          title: "V 0.7", 
          added: "New User Interface, Home Page (Includes Data Archives), Dashboard, Creation Tabs, Trend Analysis Features",
          icon: PlusCircleIcon,
          removed: "",
          icon: MinusCircleIcon,
          },
          { 
          title: "V 0.9", 
          added: "New Bullpen Tracking and Analysis!",
          icon: PlusCircleIcon,
          removed: "",
          icon: MinusCircleIcon,
          }
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
