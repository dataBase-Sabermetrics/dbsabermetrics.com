<script setup>
import MainLayout from '../layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <img class="h-12 self-start" src="../assets/SuncoastLogo.png" alt="" />
            <figure class="mt-10 flex flex-auto flex-col justify-between">
              <blockquote class="text-lg leading-8 text-white">
                <p>“It's been great getting in early with dataBase. Trackman, Rapsodo, and other ball-flight technology cost tens of thousands of dollars that none of us have at the high school level. And even those products don’t give us the necessary insights that we’ve gotten at dataBase, which is getting better and more developed every day.”</p>
              </blockquote>
              <figcaption class="mt-10 flex items-center gap-x-6">
                <img class="h-14 w-18 rounded-full bg-gray-800" src="../assets/Jimmy.png" alt="" />
                <div class="text-base">
                  <div class="font-semibold text-white">Jimmy Beno</div>
                  <div class="mt-1 text-gray-400">Head Coach, Suncoast High School</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <img class="h-12 self-start" src="../assets/bloom.png" alt="" />
            <figure class="mt-10 flex flex-auto flex-col justify-between">
              <blockquote class="text-lg leading-8 text-white">
                <p>“You cannot carve an accurate development path for a pitcher without a reliable picture of where he is at currently. dataBase's software provides a coach with that information. Data collection is an essential tool for our program and this software is a cost effective method of compiling that important information."</p>
              </blockquote>
              <figcaption class="mt-10 flex items-center gap-x-6">
                <img class="h-14 w-18 rounded-full bg-gray-800" src="../assets/mike.jpeg" alt="" />
                <div class="text-base">
                  <div class="font-semibold text-white">Mike Collins</div>
                  <div class="mt-1 text-gray-400">Head Coach, Bloomsburg University</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    </MainLayout>
  </template>
  
