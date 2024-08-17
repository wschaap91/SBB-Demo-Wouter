<script setup>
const { data, status } = await useFetch('https://cdn.umbraco.io/content/6ac1ff39-6008-49e1-aae6-2000e46dd0ff', {
  headers: {
    'Accept-Language': 'en-US',
    'umb-project-alias': 'wouters-reliable-opossum'
  },
  lazy: true,
});

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
});

watchEffect(() => {
  if (data.value) {
    useHead({
      title: data.value.heroTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: data.value.heroSubtitle,
        },
      ],
    });
  }
});

const pagewrap = ref(null)

const { arrivedState } = useScroll(pagewrap);


</script>

<template>
  <div class="page-wrapper"
       ref="pagewrap">
    <!-- <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div> -->
    <header class="header"
            :class="{ 'header--inverted': !arrivedState.top }">
      <div class="header__wrapper">
        <a href="https://www.s-bb.nl/" target="_blank" class="logo-link">
        <img src="/beeldmerk-sbb.svg"
             width="80"
             height="85"
             alt="Logo SBB"></a>
             <ul><li>

              <a href="https://koffiemetschaap.nl" target="_blank">Koffie met Schaap</a>
             </li>
            <li>
              <a href="mailto:hallo@koffiemetschaap.nl" target="_blank">hallo@koffiemetschaap.nl</a>
             </li>
<li>
              <a href="tel:0611442753" target="_blank">06 114 427 53</a>
             </li>
            </ul>
      </div>
    </header>
    <section 
             class="hero">
      <div class="hero__content">
        <h1>{{ data.heroTitle }}</h1>
        <p v-html="data.heroSubtitle"></p>
      </div>
    </section>

    <main>
    <div v-if="status === 'pending'">Loading...</div>
    <div v-else>
      <ContentBlock top :element="data.elements[0]" />

      <CtaComponent :content="data.ctas[0].content"/>
    </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  overflow-y: auto;
  height: 100dvh;
}

.logo-link {
  height: 75px;
}

.header {
  z-index: 3;
  position: fixed;
  width: 100%;
  transition: background-color 0.1s, color 0.1s;
  color: white;
  font-weight: bold;

  a {
    color: inherit;
  }

  .header__wrapper {
    max-width: calc(100% - 80px);
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      padding-inline: 0;
      margin-block: 0;

      font-size: 14px;
      flex-direction: column;
      gap: 0.25rem;
      align-items: flex-end;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        font-size: 1rem;
        gap: 1.25rem;
      }
    }
  }

  &--inverted {
    background-color: white;
    color: black;
  }
}

.page-wrap {
  padding-block-start: 110px;
}

.hero {
  background-color: #bd1521;
  font-weight: bold;
  color: white;
  padding-block: 110px;
  padding-inline: 60px;

  .hero__content {
    max-width: 1360px;
    margin-inline: auto;
  }

  p {
    max-width: 600px;
  }
}</style>
