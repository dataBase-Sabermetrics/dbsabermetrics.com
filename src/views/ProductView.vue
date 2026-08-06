<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import ProductScreenshot from '../components/ProductScreenshot.vue';
import ProductInfo from '../components/ProductInfo.vue';
</script>

<template>
    <MainLayout>
        <ProductScreenshot />
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <img src="../assets/DashScreenshot.png" alt="Dashboard screenshot" class="w-full rounded-xl shadow-xl ring-1 ring-white/10" />
            <img src="../assets/DashScreenshot2.png" alt="Dashboard screenshot" class="w-full rounded-xl shadow-xl ring-1 ring-white/10" />
          </div>
        </div>
        <ProductInfo />
    </MainLayout>
</template>
