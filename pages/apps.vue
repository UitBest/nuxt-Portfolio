<template>
  <v-parallax
    min-height="100vh"
    src="/img/WebsitesBackground.jpg"
  >
    <v-container v-if="$route.meta.isRoot">
      <v-sheet class="pt-16 pb-10">
        <div class="text-h2 mb-4 text-center">Apps</div>
        <div class="text-subtitle-1 text-center">
          Hieronder vind je een overzicht van websites die we hebben ontwikkeld voor klanten en familieleden.
          <br />
          Voor applicaties kunnen we je tijdens een gesprek een demonstratie geven.
        </div>
      </v-sheet>
      <v-divider
        class="mx-auto"
        inset
      />
      <v-sheet
        class="d-flex flex-wrap mx-auto"
        max-width="2000"
      >
        <client-only>
          <v-sheet
            v-for="site in sites"
            :key="site.name"
            :class="mobile ? 'px-4 py-16' : 'pa-16'"
            :width="mobile ? '100%' : '50%'"
          >
            <v-card
              color="transparent"
              elevation="24"
              height="100%"
              style="backdrop-filter: blur(20px)"
              :title="site.name"
              :to="site.to"
            >
              <v-card-text>
                <v-img
                  v-if="site?.imgUrl"
                  aspect-ratio="1.3"
                  class="rounded-lg my-4 elevation-24"
                  cover
                  eager
                  position="relative"
                  :src="site?.imgUrl"
                />
                <v-sheet
                  class="d-flex flex-row"
                  position="relative"
                >
                  <v-sheet
                    class="pr-4 d-flex flex-column"
                    width="50%"
                  >
                    <v-sheet class="align-self-baseline">
                      <div class="font-weight-black">Omschrijving</div>
                      <div>{{ site.description }}</div>
                    </v-sheet>

                    <v-sheet
                      height="100%"
                      min-height="20"
                    />

                    <v-sheet>
                      <div class="font-weight-black">Periode:</div>
                      <div>{{ site.when }}</div>
                    </v-sheet>
                  </v-sheet>

                  <v-divider vertical />

                  <v-sheet
                    class="pl-4 text-right d-flex flex-column"
                    width="50%"
                  >
                    <v-sheet>
                      <div class="font-weight-black">Duur:</div>
                      <div>{{ site.duration }}</div>
                    </v-sheet>
                  </v-sheet>
                </v-sheet>
              </v-card-text>
            </v-card>
          </v-sheet>
        </client-only>
      </v-sheet>
    </v-container>

    <NuxtPage v-else />

    <v-sheet
      v-if="$route.name !== 'Apps'"
      class="mb-10"
      location="bottom center"
      position="fixed"
    >
      <v-btn
        height="46"
        text="Alle apps bekijken"
        :to="{ name: 'Apps' }"
      />
    </v-sheet>
  </v-parallax>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useDisplay } from 'vuetify';

  const display = useDisplay();
  const mobile = computed(() => display.smAndDown.value);

  const sites = [
    {
      name: 'Framazon CRM',
      description:
        'Framazon had een CRM-systeem nodig om klanten en bestellingen te beheren. Het systeem is ontwikkeld met Laravel en Vue.js.',
      duration: '343 uur',
      when: 'Midden 2024',
      imgUrl: '/img/framazon-crm-preview.png',
      to: { name: 'Framazon CRM' },
    },
    {
      name: 'NFB Snapshot App',
      description:
        'NFB wilde een applicatie waarmee ze snel en eenvoudig foto\'s konden maken van hun producten en dat deze direct geüpload worden naar hun Microsoft Sharepoint omgeving.',
      duration: '30 uur',
      when: 'Begin 2024',
      imgUrl: '/img/snapshot-app-preview.png',
      to: { name: 'Snapshot App' },
    },
  ];

  useSeoMeta({
    description:
      'Op deze pagina vind je een overzicht van de applicaties die we hebben ontwikkeld voor klanten en familieleden.',
    ogDescription:
      'Op deze pagina vind je een overzicht van de applicaties die we hebben ontwikkeld voor klanten en familieleden.',
    ogImage: '/img/Timo.jpeg',
    twitterTitle: 'Apps',
    twitterDescription:
      'Op deze pagina vind je een overzicht van de applicaties die we hebben ontwikkeld voor klanten en familieleden.',
    twitterImage: '/img/Timo.jpeg',
    twitterCard: 'summary',
  });

  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      {
        rel: 'icon',
        type: 'image/ico',
        href: '/favicon.ico',
      },
    ],
  });
</script>