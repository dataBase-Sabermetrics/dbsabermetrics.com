<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import OurTeam from '../components/OurTeam.vue';
const stats = [
//   { label: 'Our Mission', value: 'We seek to make baseball’s analytical revolution accessible to everyone'},
  { label: 'Founded', value: '2024' },
]

const showArrow = ref(true);

onMounted(() => {
    window.addEventListener('scroll', () => {
        showArrow.value = window.pageYOffset === 0;
    });
});
</script>

<template>
    <MainLayout>
      <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">Our Story</h2>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">dataBase Sabermetrics</h2>
            <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                <div>
                <p>dataBase is a pitch tracking software that allows teams to track all of their games, live at-bats, and bullpens in real time. With instant access to their very own user-friendly dashboard, teams will have hundreds of advanced statistics, metrics, and performance trends at their fingertips. And for the first time ever, college coaches will be able to view large sample sizes of prospective student-athlete performance in-game.</p>
                <p class="mt-8">Our story began with curiosity. What is the easiest way to track important statistics? And how can we house them efficiently? As we researched and experimented, we discovered the answer was not a matter of money or access to technology - but of practicality and simplicity.</p>
                </div>
                <div>
                <p>We have developed a one-of-a-kind application that is easy to use and affordable for any program, coach, or aspiring baseball professional to access. We've changed how advanced statistics are tracked and we are proud to share our methodology with those who are passionate about pursuing their best product on the field. With dataBase, we have now learned how we can track trends in our players' performances and use them to coach them up. </p>
                <p class="mt-8">We sought to find a way to bring everyone along for the ride as baseball becomes data-driven. It was vital to us that it did not break anyone’s budget. It was vital that we helped everyone with the proper drive and motivation to be efficient. </p>
                </div>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-2">
                <div v-for="(stat, statIdx) in stats" :key="statIdx" class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                <dt class="text-base leading-7 text-gray-300">{{ stat.label }}</dt>
                <dd class="text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
                </div>
            </dl>
            </div>
        </div>
      </div>
      <div class="arrow" v-show="showArrow">
          <span class="arrow-bounce">&#8595;</span>
      </div>
      <OurTeam />
    </MainLayout>
  </template>

<style scoped>
.arrow {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 50px;
    color: #fff;
}

.arrow-bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}
</style>
