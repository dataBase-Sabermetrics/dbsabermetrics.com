<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import OurTeam from '../components/OurTeam.vue';
const stats = [
  { label: 'Founded', value: '2024' },
  { label: 'Team Size', value: '4' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
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
            <p class="text-base font-semibold leading-7 text-indigo-400">Our Story</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">dataBase Sabermetrics</h1>
            <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                <div>
                <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.</p>
                </div>
                <div>
                <p>Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt voluptate.</p>
                <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
                </div>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
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