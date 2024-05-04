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
                <p>“There is nothing out there like dataBase. Trackman, Rapsodo, and other ball-flight technology cost tens of thousands of dollars that none of us have at the high school level. And even those products don’t give us the necessary insights that we’ve gotten at dataBase at a fraction of the cost.”</p>
              </blockquote>
              <figcaption class="mt-10 flex items-center gap-x-6">
                <img class="h-14 w-14 rounded-full bg-gray-800" src="../assets/JimmyHeadshot.jpg" alt="" />
                <div class="text-base">
                  <div class="font-semibold text-white">Jimmy Beno</div>
                  <div class="mt-1 text-gray-400">Head Coach, Suncoast High School FL</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <img class="h-12 self-start" src="../assets/Spider.png" alt="" />
            <figure class="mt-10 flex flex-auto flex-col justify-between">
              <blockquote class="text-lg leading-8 text-white">
                <p>“dataBase has the potential to change the landscape of college recruiting. Doing research on the student-athletes we bring in is paramount to our success. dataBase in its full form will allow us to do our due diligence and then some.”</p>
              </blockquote>
              <figcaption class="mt-10 flex items-center gap-x-6">
                <img class="h-14 w-18 rounded-full bg-gray-800" src="../assets/Ep.jpg" alt="" />
                <div class="text-base">
                  <div class="font-semibold text-white">Josh Epstein</div>
                  <div class="mt-1 text-gray-400">Pitching Coach, University of Richmond</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    </MainLayout>
  </template>
  