<template>
  <v-container fluid>
    <v-parallax src="/img/WebsitesBackground.jpg">
      <v-sheet class="pt-16 pb-10">
        <div class="text-h2 mb-4 text-center">NFB Snapshot App</div>
        <div class="text-subtitle-1 text-center">
          Met de SnapshotApp van NFB is het mogelijk om snel en eenvoudig een foto te maken en direct te uploaden naar
          Microsoft Sharepoint. <br />
          Deze app is makkelijk te kopiëren naar een ander bedrijf en kan worden aangepast naar wens.
        </div>
      </v-sheet>

      <v-divider
        class="mx-auto mb-10"
        inset
      />

      <Feature
        v-for="(feature, i) in features"
        :key="i"
        :feature="feature"
        type="mobile"
      />
    </v-parallax>
  </v-container>
</template>

<script setup>
  import Feature from '~/components/app-previews/Feature.vue';

  const features = [
    {
      title: 'Microsoft',
      description:
        'Inloggen gaat via Microsoft. De gebruiker kan inloggen met zijn Microsoft account en er word gecontroleerd of de gebruiker toegang mag krijgen tot de Sharepoint omgeving van het bedrijf.',
      images: [
        '/img/app-previews/snapshot-app/start1.png',
        '/img/app-previews/snapshot-app/start2.png',
        '/img/app-previews/snapshot-app/start3.png',
      ],
    },
    {
      title: 'Foto maken',
      description:
        'Wanneer de gebruiker een camera heeft geselecteerd, zal er een preview worden getoond in het venster bovenaan. De gebruiker kan kiezen om een watermerk toe te voegen of de preview uit te schakelen om foto\'s direct toe te voegen aan de wachtrij.',
      images: ['/img/app-previews/snapshot-app/capture1.png', '/img/app-previews/snapshot-app/capture2.png'],
    },
    {
      title: 'Uploaden',
      description:
        'Eerst word gevraagd in welke folder de foto\'s zullen komen. Daarna krijgt de gebruiker een overzicht van de foto\'s die hij heeft gemaakt en kan kiezen om foto\'s te verwijderen of te uploaden. Wanneer de gebruiker op uploaden klikt, worden de foto\'s direct geüpload naar de Sharepoint omgeving van het bedrijf.',
      images: [
        '/img/app-previews/snapshot-app/upload1.png',
        '/img/app-previews/snapshot-app/upload2.png',
        '/img/app-previews/snapshot-app/upload3.png',
      ],
    },
  ];

  useSeoMeta({
    description: 'Op deze pagina wordt de Snapshot App van NFB getoond.',
    ogDescription: 'Op deze pagina wordt de Snapshot App van NFB getoond.',
    twitterTitle: 'NFB Snapshot App',
    twitterDescription: 'Op deze pagina wordt de Snapshot App van NFB getoond.',
    twitterCard: 'summary',
  });
</script>

