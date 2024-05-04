<script setup>
  import posthog from 'posthog-js'
  posthog.init('phc_KtFvKq3mwT73CDUpet4iTWe15bv33TFztOqRfh81DHz', { api_host: 'https://app.posthog.com' })
</script>

<template>
  <router-view></router-view>
</template>
