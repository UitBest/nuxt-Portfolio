<template>
  <v-container
    class="pa-0 position-relative"
    fluid
  >
    <v-parallax
      v-if="$route.meta.isRoot"
      src="/img/WebsitesBackground.jpg"
    >
      <v-sheet class="pt-16 pb-10">
        <div class="text-h2 mb-4 text-center">Websites</div>
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
            v-for="site in sites.filter((site, key) => !!site.show)"
            :key="site.name"
            :class="mobile ? 'px-4 py-16' : 'pa-16'"
            :width="mobile ? '100%' : '50%'"
          >
            <v-card
              color="transparent"
              elevation="24"
              height="100%"
              style="backdrop-filter: blur(20px)"
              :subtitle="site.url"
              :title="site.name"
              :to="{ name: site.name }"
            >
              <template
                v-if="site?.archiveUrl"
                #append
              >
                <v-btn
                  append-icon="mdi-history"
                  class="font-weight-bold"
                  text="Archief"
                  :to="{ name: site.name + ' - Archief' }"
                />
              </template>
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

                    <v-sheet
                      height="100%"
                      min-height="20"
                    />

                    <v-sheet class="align-self-end">
                      <div class="font-weight-black">Link:</div>
                      <div>{{ site.url }}</div>
                    </v-sheet>
                  </v-sheet>
                </v-sheet>
              </v-card-text>
            </v-card>
          </v-sheet>
        </client-only>
      </v-sheet>
    </v-parallax>

    <template
      v-for="(site, key) in sites"
      :key="key"
    >
      <v-sheet
        v-show="!site.loaded.value && $route.name === site.name"
        class="my-8 text-center"
      >
        <div class="text-h4">Even geduld a.u.b.</div>
        <v-progress-circular
          indeterminate
          size="large"
        />
      </v-sheet>
      <embed
        v-show="$route.name === site.name"
        :src="site.url"
        style="height: 100svh; width: 100%"
        @load="site.loaded.value = true"
      />
      <v-hover
        v-if="$route.name === site.name && (site?.archiveUrl || site?.originalUrl)"
        v-slot="{ isHovering, props }"
      >
        <v-btn
          v-bind="props"
          class="ma-10"
          height="46"
          location="bottom right"
          min-width="46"
          position="absolute"
          :to="
            site.archiveUrl
              ? { name: site.name + ' - Archief' }
              : site.originalUrl
                ? { name: site.name.split(' - ')[0] }
                : { name: 'Home' }
          "
        >
          <template #default>
            <v-expand-x-transition>
              <v-sheet v-show="isHovering">
                {{ site.archiveUrl ? 'Archief' : 'Vernieuwd' }}
              </v-sheet>
            </v-expand-x-transition>
            <v-icon
              :icon="site.archiveUrl ? 'mdi-history' : 'mdi-fast-forward-outline'"
              size="32"
            />
          </template>
        </v-btn>
      </v-hover>
    </template>

    <v-sheet
      v-if="$route.name !== 'Websites'"
      class="mb-10"
      location="bottom center"
      position="absolute"
    >
      <v-btn
        height="46"
        text="Alle websites bekijken"
        :to="{ name: 'Websites' }"
      />
    </v-sheet>
  </v-container>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { useDisplay } from 'vuetify';

  const display = useDisplay();
  const mobile = computed(() => display.smAndDown.value);

  const sites = [
    {
      show: true,
      name: 'Van Gestel Inspecties',
      url: 'https://www.vangestelinspecties.nl/',
      // archiveUrl: 'https://van-gestel-inspecties-archive.uit-best.nl/',
      loaded: ref(false),
      description:
        'De website voldeed niet meer aan moderne eisen en is volledig vernieuwd met een focus op eenvoud en gebruiksvriendelijkheid.',
      duration: '22 uur',
      when: 'Eind 2024',
      imgUrl: '/img/van-gestel-inspecties-preview.png',
    },
    {
      show: true,
      name: 'Appeldoorn Riooltechniek',
      url: 'https://appeldoornriooltechniek.nl/',
      archiveUrl: 'https://appeldoorn-archive.uit-best.nl/',
      loaded: ref(false),
      description:
        'De website is vernieuwd en geoptimaliseerd voor betere prestaties in Google, met een modern ontwerp en verbeterde structuur.',
      duration: '22 uur',
      when: 'Eind 2024',
      imgUrl: '/img/appeldoorn-riooltechniek-preview-nieuw.png',
    },
    {
      show: true,
      name: 'DiederIT',
      url: 'https://dieder.it/',
      archiveUrl: 'https://diederit-archive.uit-best.nl/',
      loaded: ref(false),
      description:
        'De originele website voldeed niet meer aan de huidige standaarden en had dringend behoefte aan een modern en fris design.',
      duration: '16 uur (inclusief design, exclusief tekst)',
      when: 'Midden 2024',
      imgUrl: '/img/diederit-preview.png',
    },
    {
      show: true,
      name: '4 Torentjes',
      url: 'https://www.4torentjes.nl',
      loaded: ref(false),
      description:
        'De website 4 Torentjes dient als online presentatie voor een huis in Portugal, eigendom van mijn grootvader.',
      duration: '16 uur (zonder design i.v.m. gebruik origineel design)',
      when: 'Eind 2023',
      imgUrl: '/img/4TorentjesCutOut.png',
    },
    {
      show: true,
      name: 'Madje Diensten',
      url: 'https://www.madjediensten.nl',
      loaded: ref(false),
      description: 'Madjediensten.nl biedt informatie over schoonmaakdiensten, opgezet voor een familielid',
      duration: '18 uur',
      when: 'Midden 2023',
      imgUrl: '/img/MadjeDienstenCutOut.png',
    },

    // Archive

    {
      show: false,
      name: 'Van Gestel Inspecties - Archief',
      originalUrl: 'https://www.vangestelinspecties.nl/',
      url: 'https://van-gestel-inspecties-archive.uit-best.nl/',
      loaded: ref(false),
      description:
        'De website voldeed niet meer aan moderne eisen en is volledig vernieuwd met een focus op eenvoud en gebruiksvriendelijkheid.',
      duration: '22 uur',
      when: 'Eind 2024',
      imgUrl: '/img/van-gestel-inspecties-preview.png',
    },
    {
      name: 'DiederIT - Archief',
      show: false,
      url: 'https://diederit-archive.uit-best.nl/',
      originalUrl: 'https://dieder.it/',
      loaded: ref(false),
      description:
        'De originele website voldeed niet meer aan de huidige standaarden en had dringend behoefte aan een modern en fris design.',
      duration: '16 uur (inclusief design, exclusief tekst)',
      when: 'Midden 2024',
      imgUrl: '/img/diederit-preview.png',
    },
    {
      name: 'Appeldoorn Riooltechniek - Archief',
      show: false,
      originalUrl: 'https://appeldoornriooltechniek.nl/',
      url: 'https://appeldoorn-archive.uit-best.nl/',
      loaded: ref(false),
      description:
        'De website is vernieuwd en geoptimaliseerd voor betere prestaties in Google, met een modern ontwerp en verbeterde structuur.',
      duration: '18 uur (exclusief design, exclusief tekst)',
      when: 'Midden 2024',
      imgUrl: '/img/appeldoorn-riooltechniek-preview.png',
    },
  ];

  useSeoMeta({
    description: 'Bekijk hier een overzicht van de websites die ik heb gemaakt voor klanten en familieleden.',
    ogDescription: 'Bekijk hier een overzicht van de websites die ik heb gemaakt voor klanten en familieleden.',
    ogImage: '/img/Timo.jpeg',
    twitterTitle: 'Websites',
    twitterDescription: 'Bekijk hier een overzicht van de websites die ik heb gemaakt voor klanten en familieleden.',
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
