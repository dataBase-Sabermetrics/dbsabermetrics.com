<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import ProductScreenshot from '../components/ProductScreenshot.vue';
import ProductInfo from '../components/ProductInfo.vue';
import Roadmap from '../components/Roadmap.vue';
</script>

<template>
  <MainLayout>
    <Roadmap />
    <ProductScreenshot />
    <ProductInfo />
  </MainLayout>
</template>
