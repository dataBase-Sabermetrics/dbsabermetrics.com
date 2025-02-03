<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import ProductScreenshot from '../components/ProductScreenshot.vue';
import ProductInfo from '../components/ProductInfo.vue';
</script>

<template>
    <MainLayout>
        <ProductScreenshot />
        <div class="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3 text-center mx-12">
          <img src="../assets/DashScreenshot.png" alt="Product screenshot" class="max-w-2xl xl:max-w-3xl rounded-xl shadow-xl" />
          <img src="../assets/DashScreenshot2.png" alt="Product screenshot" class="max-w-2xl xl:max-w-3xl rounded-xl shadow-xl" />
        </div>
        <ProductInfo />
    </MainLayout>
</template>
