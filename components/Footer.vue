<template>
  <v-container
    :class="mobile ? 'pa-4' : 'pa-10'"
    fluid
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-btn
          v-if="mobile"
          :append-icon="darkColor ? 'mdi-lightbulb' : 'mdi-moon-waning-crescent'"
          class="mt-8 mr-8"
          :color="darkColor ? 'primary' : 'dark'"
          location="top end"
          position="absolute"
          size="x-small"
          :text="darkColor ? 'Verlicht' : 'Donker'"
          variant="text"
          @click="darkColor = !darkColor"
        />
        <v-sheet height="50">
          <div
            class="text-h6 text-center"
            :class="darkColor ? 'text-white' : 'text-dark'"
          >
            Contactinformatie
          </div>
        </v-sheet>
        <div
          class="text-body-1 mt-4"
          :class="mobile && 'text-center' + (darkColor ? ' text-primary' : ' text-dark')"
        >
          Uit Best
        </div>
        <v-divider class="mb-2 mt-1" />
        <div class="text-body-2 d-flex justify-space-between">
          <div>
            Adres:<br />
            Postcode:<br />
            Plaats:<br />
            KVK:<br />
          </div>
          <div class="text-end">
            de Dieze 35<br />
            5684 PR<br />
            Best<br />
            92576176<br />
          </div>
        </div>
      </v-col>
      <v-spacer />
      <v-divider
        :class="mobile && 'mb-10'"
        :vertical="!mobile"
      />
      <v-spacer />
      <v-col
        cols="12"
        md="6"
      >
        <v-sheet
          class="d-flex justify-center"
          height="50"
        >
          <v-btn-group
            :color="darkColor ? 'primary' : 'dark'"
            divided
            rounded="lg"
          >
            <v-btn
              href="https://www.instagram.com/ik_ben_timo/"
              icon="mdi-instagram"
              target="_blank"
              variant="tonal"
            />
            <v-btn
              href="https://www.linkedin.com/in/timo-cuijpers-5781122b1/"
              icon="mdi-linkedin"
              target="_blank"
              variant="tonal"
            />
            <v-btn
              href="https://github.com/TimoCuijpers"
              icon="mdi-github"
              target="_blank"
              variant="tonal"
            />
            <v-btn
              href="tel:0624196843"
              icon="mdi-phone"
              target="_blank"
              variant="tonal"
            />
          </v-btn-group>
        </v-sheet>
        <div
          class="text-body-1 mt-4"
          :class="mobile && 'text-center' + (darkColor ? ' text-primary' : ' text-dark')"
        >
          Timo Cuijpers
        </div>
        <v-divider class="mb-2 mt-1" />
        <div class="text-body-2 d-flex justify-space-between">
          <div>
            Tel:<br />
            E-mail:<br />
          </div>
          <div
            class="text-end"
            :class="darkColor ? 'text-white' : 'text-dark'"
          >
            +31 6 24 19 68 43<br />
            <span
              ><a
                class="text-decoration-none"
                :class="darkColor ? 'text-white' : 'text-dark'"
                href="mailto:timo@uit.best"
                >timo@uit.best</a
              ></span
            ><br />
          </div>
        </div>
      </v-col>
      <v-divider />
      <v-col cols="12">
        <v-sheet height="50">
          <div
            class="text-h6 text-center"
            :class="darkColor ? 'text-primary' : 'text-dark'"
          >
            Pagina's
          </div>
        </v-sheet>
        <v-container class="pa-0">
          <v-row
            class="text-body-1 mt-1"
            :class="darkColor ? ' text-primary' : ' text-dark'"
            justify="space-between"
          >
            <v-col
              cols="12"
              md="4"
            >
              Portfolio
              <br />
              <NuxtLink
                :class="darkColor ? 'text-white' : 'text-dark'"
                href="/home"
              >
                Home
              </NuxtLink>
              <br />
              <NuxtLink
                :class="darkColor ? 'text-white' : 'text-dark'"
                href="/uit-best"
              >
                Uit Best
              </NuxtLink>
              <br />
              <NuxtLink
                :class="darkColor ? 'text-white' : 'text-dark'"
                href="/websites"
              >
                Websites </NuxtLink
              ><br />
            </v-col>
            <v-col
              class="text-md-center text-truncate"
              cols="12"
              md="4"
            >
              Apps
              <br />
              <template
                v-for="(app, key) in apps"
                :key="key"
              >
                <NuxtLink
                  :class="darkColor ? 'text-white' : 'text-dark'"
                  :href="app.to"
                >
                  {{ app.name }}
                </NuxtLink>
                <br />
              </template>
            </v-col>
            <v-col
              class="text-md-end text-truncate"
              cols="12"
              md="4"
            >
              Websites
              <br />
              <template
                v-for="(website, key) in websites"
                :key="key"
              >
                <NuxtLink
                  :class="darkColor ? 'text-white' : 'text-dark'"
                  :href="website.to"
                >
                  {{ website.name }}
                </NuxtLink>
                <br />
              </template>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed } from 'vue';
  import { useDisplay } from 'vuetify';

  defineProps({
    apps: Array,
    websites: Array,
  });

  const darkColor = defineModel('darkColor', {
    default: true,
    type: Boolean,
  });

  const display = useDisplay();
  const mobile = computed(() => display.smAndDown.value);
</script>
