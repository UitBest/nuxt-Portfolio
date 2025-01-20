<template>
  <v-container fluid>
    <v-parallax src="/img/WebsitesBackground.jpg">
      <v-sheet class="pt-16 pb-10">
        <div class="text-h2 mb-4 text-center">Framazon CRM</div>
        <div class="text-subtitle-1 text-center">
          De CRM applicatie van Framazon is een applicatie die het mogelijk maakt om orders, facturen, producten en
          klanten te beheren. <br />
          De applicatie is volledig op maat gemaakt en is volledig responsive. <br />
          Het word aangeraden deze pagina te bekijken op een desktop of tablet.
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
      />
    </v-parallax>
  </v-container>
</template>

<script setup>
  import Feature from '~/components/app-previews/Feature.vue';

  const features = [
    {
      title: 'Orders',
      description:
        'Orders hebben recepten, klanten, producten en facturen. Elke koppeling is te zien in de order details. De orders kunnen verstuurd, geannuleerd en gefactureerd worden in de applicatie.',
      images: [
        '/img/app-previews/framazon-crm/orders1.png',
        '/img/app-previews/framazon-crm/orders2.png',
        '/img/app-previews/framazon-crm/orders3.png',
        '/img/app-previews/framazon-crm/orders4.png',
      ],
    },
    {
      title: 'Facturen',
      description:
        'Een factuur kan worden aangemaakt vanuit een order. De factuur kan worden gedownload als PDF en worden verstuurd naar de klant. Ook kan de factuur als creditnota worden aangemaakt. De velden kunnen niet bewerkt worden als een order nummer is ingevuld.',
      images: [
        '/img/app-previews/framazon-crm/invoices1.png',
        '/img/app-previews/framazon-crm/invoices2.png',
        '/img/app-previews/framazon-crm/invoices3.png',
        // '/img/app-previews/framazon-crm/invoices4.png',
      ],
    },
    {
      title: 'Producten',
      description:
        'Producten en subproducten worden handmatig toegevoegd. Elk product heeft rasterprijzen, attributen, subproducten en elk subproduct kan een eigen prijs / percentage hebben.',
      images: ['/img/app-previews/framazon-crm/products1.png', '/img/app-previews/framazon-crm/products2.png'],
    },
    {
      title: 'Bedrijven',
      description:
        'Bedrijven hebben factuur- en afleveradressen en het e-mailadres van de contactpersoon word weergeven bij een order of factuur. In een order of factuur kan een bedrijf worden toegevoegd en de adresgegevens kunnen automatisch worden ingevuld.',
      images: ['/img/app-previews/framazon-crm/companies1.png', '/img/app-previews/framazon-crm/companies2.png'],
    },
  ];

  useSeoMeta({
    description: 'Op deze pagina wordt de CRM applicatie van Framazon getoond.',
    ogDescription: 'Op deze pagina wordt de CRM applicatie van Framazon getoond.',
    twitterTitle: 'Framazon CRM',
    twitterDescription: 'Op deze pagina wordt de CRM applicatie van Framazon getoond.',
    twitterCard: 'summary',
  });
</script>

