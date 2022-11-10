<template>
  <div>
    <h1>Welcome to the About</h1>
    <ul>
      <li>
        <NuxtLink to="/">About</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'about'
  }
})
</script>
