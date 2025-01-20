<template>
  <NuxtLayout>
    <NuxtPage />
    <Analytics />
  </NuxtLayout>
</template>

<script setup>
  import { Analytics } from '@vercel/analytics/nuxt';
</script>