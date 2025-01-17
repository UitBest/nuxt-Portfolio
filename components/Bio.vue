<template>
  <v-card
    color="transparent"
    elevation="24"
    height="100%"
    style="backdrop-filter: blur(20px)"
  >
    <v-card-title
      id="Bio"
      class="text-primary"
    >
      Bio
    </v-card-title>
    <v-card-text>
      <div class="text-caption text-primary">OVER MIJ</div>
      <div>Ik ben Timo Cuijpers, geboren en getogen in Best.</div>
      <br />
      <div>
        Op het Summa College in Eindhoven begon ik de opleiding Expert IT, maar al snel bleek dat mijn interesse bij
        softwareontwikkeling lag. Daarom ben ik overgestapt naar de opleiding Software Developer, die ik begin 2024
        succesvol heb afgerond.
      </div>
      <br />
      <div>
        Tijdens mijn studie was ik al bezig met projecten, zoals het maken van websites voor familie, vrienden en
        kennissen. In de zomervakantie van 2023 heb ik samen met 2 vrienden zelfs een webapplicatie gemaakt. Dit was een
        leerzame ervaring maar door omstandigheden is het project helaas niet afgerond. Indien er voorkeur is naar inzage
        in dit project, dan kan dit worden aangevraagd.
      </div>
      <br />

      <NuxtLink to="/websites">Bekijk websites</NuxtLink>

      <br />
      <br />
      <div>
        Het besluit om een eigen bedrijf te starten kwam na mijn afstudeerstage bij "WEAP". Er ontstond toen een enorme
        persoonlijke en professionele groei. Deze ontwikkeling was te danken aan de professionele werkomgeving en het
        aanleren van verantwoordelijkheidsgevoel.
      </div>
      <br />
      <div>
        Nu maak ik professionele websites en webapplicaties voor bedrijven en particulieren. Mijn doel is om de klant
        tevreden te stellen en een product te leveren waar ik zelf ook trots op kan zijn.
      </div>
      <br />

      <v-divider />
      <br />
      <div class="text-caption text-primary">STUDIE</div>
      <div>
        In 2020 vond er een overgang plaats van het Kempenhorst College in Oirschot naar het Summa College in Eindhoven.
        Aanvankelijk was de inschrijving voor de opleiding Expert IT, maar binnen een half jaar werd duidelijk dat een
        grotere interesse lag bij programmeren.
      </div>
      <br />
      <div>
        Deze nieuwe inzichten leidden tot een overstap naar de opleiding 'Software Developer', die begin 2024 succesvol
        werd afgerond.
      </div>
      <br />
      <v-divider />
      <br />
      <div class="text-caption text-primary">EIGEN BEDRIJF</div>
      <div>
        Na het versneld afronden van de opleiding en een leerzame stageperiode, werd de stap gezet om een eigen
        onderneming, 'Uit Best', op te richten. Deze kans deed zich voor in een kamer van
        <a
          class="text-white"
          href="https://www.dieder.it/"
          target="_blank"
        >
          mijn vaders bedrijf
        </a>
        . Dankbaarheid wordt uitgesproken voor de mogelijkheid en de waardevolle adviezen over het runnen van een eigen
        bedrijf.
      </div>
      <br />
      <div>
        De eindstage bood essentiële inzichten en het vertrouwen dat het starten van een eigen bedrijf een haalbare droom
        is.
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue';
</script>
