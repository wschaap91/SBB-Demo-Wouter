<script setup>
  const { data, status} = await useFetch('https://cdn.umbraco.io/content/6ac1ff39-6008-49e1-aae6-2000e46dd0ff', {
    headers: {
      'Accept-Language': 'en-US',
    'umb-project-alias': 'wouters-reliable-opossum'
    },
    lazy: true,
  });
</script>

<template>
  <!-- <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div> -->

  <div v-if="status === 'pending'">Loading...</div>
  <div v-else>
    <img :src="data.heroImage.umbracoFile.url" :alt=data.heroImage.name >
    <h1>{{ data.heroTitle }}</h1>
    <div v-html="data.heroSubtitle"></div>
  </div>
</template>
