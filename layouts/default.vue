<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      close-delay="300"
      color="dark"
      expand-on-hover
      :location="mobile ? 'top' : 'left'"
      :permanent="!mobile"
      :rail="!pinned && !mobile"
      :temporary="mobile"
    >
      <v-list
        bg-color="dark"
        rounded="lg"
      >
        <v-list-item
          subtitle="timo@uit.best"
          title="Timo Cuijpers"
        >
          <template #prepend>
            <v-avatar
              class="cursor-pointer"
              :image="profileAvatar"
              @click="showProfileOverlay = true"
            />
          </template>
          <template
            v-if="!mobile"
            #append
          >
            <v-btn
              class="align-self-end"
              color="white"
              :icon="(pinned ? 'mdi-pin' : 'mdi-pin-outline') + ' mdi-rotate-45'"
              size="36"
              variant="text"
              @click="mobile ? (pinned = false) : (pinned = !pinned)"
            />
          </template>
        </v-list-item>
      </v-list>

      <v-divider
        v-show="pinned || !mobile"
        color="dark"
      />

      <v-list
        bg-color="dark"
        density="compact"
        nav
        rounded="lg"
        slim
      >
        <v-list-item
          v-for="(item, key) in defaultRoutes"
          :key="key"
          :prepend-icon="item.icon"
          :title="item.name"
          :to="item.to"
        />

        <v-divider />

        <v-list-subheader class="w-100 d-flex justify-center font-weight-bold text-white"> Websites </v-list-subheader>

        <v-divider />

        <v-list-item
          v-for="(item, key) in websites"
          :key="key"
          :prepend-icon="item.icon"
          :title="item.name"
          :to="item.to"
          :value="item.name"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      v-if="mobile"
      color="dark"
      density="compact"
      scroll-behavior="collapse"
    >
      <v-btn
        v-model="drawer"
        block
        :icon="drawer ? 'mdi-close' : 'mdi-menu'"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <v-main>
      <keep-alive>
        <NuxtPage />
      </keep-alive>

      <v-footer :color="darkColor ? 'dark' : 'white'">
        <Footer v-model:dark-color="darkColor" />
      </v-footer>
    </v-main>

    <v-overlay
      v-model="showProfileOverlay"
      class="d-flex justify-center align-center"
      eager
    >
      <ProfileOverlay @close="showProfileOverlay = false" />
    </v-overlay>
  </v-app>
</template>

<script setup>
  import Footer from '../components/Footer.vue';

  import { computed, onMounted, ref, watch } from 'vue';
  import ProfileOverlay from '~/components/Layout/ProfileOverlay.vue';
  import { useDisplay } from 'vuetify';

  const profileAvatar = computed(() => '/img/Timo.jpeg');

  const display = useDisplay();
  const mobile = computed(() => display.smAndDown.value);

  const routes = [
    {
      path: '/home',
      name: 'Home',
      meta: {
        isRoot: true,
        title: 'Home',
      },
    },
    {
      path: '/uit-best',
      name: 'Uit Best',
      meta: {
        isRoot: true,
        title: 'Uit Best',
      },
    },
    {
      path: '/websites',
      name: 'Websites',
      meta: {
        isRoot: true,
        title: 'Websites',
      },
      children: [
        {
          path: '/van-gestel-inspecties',
          name: 'Van Gestel Inspecties',
          meta: {
            title: 'Van Gestel Inspecties',
            isRoot: false,
            sidebar: {
              icon: 'mdi-magnify',
              name: 'Van Gestel Inspecties',
              to: { name: 'Van Gestel Inspecties' },
            },
          },
        },
        {
          path: '/appeldoorn-riooltechniek',
          name: 'Appeldoorn Riooltechniek',
          meta: {
            isRoot: false,
            title: 'Appeldoorn Riooltechniek',
            url: 'https://appeldoornriooltechniek.nl/',
            sidebar: {
              icon: 'mdi-toolbox',
              name: 'Appeldoorn Riooltechniek',
              to: { name: 'Appeldoorn Riooltechniek' },
            },
          },
        },
        {
          path: '/dieder-it',
          name: 'DiederIT',
          meta: {
            isRoot: false,
            title: 'Dieder.IT',
            sidebar: {
              icon: 'mdi-laptop',
              name: 'Dieder.IT',
              to: { name: 'DiederIT' },
            },
          },
        },
        {
          path: '/4torentjes',
          name: '4 Torentjes',
          meta: {
            isRoot: false,
            title: '4 Torentjes',
            sidebar: {
              icon: 'mdi-weather-sunny',
              name: '4 Torentjes',
              to: { name: '4 Torentjes' },
            },
          },
        },
        {
          path: '/madje-diensten',
          name: 'Madje Diensten',
          meta: {
            title: 'Madje Diensten',
            isRoot: false,
            sidebar: {
              icon: 'mdi-broom',
              name: 'Madje Diensten',
              to: { name: 'Madje Diensten' },
            },
          },
        },

        // Archive

        {
          path: '/dieder-it-archive',
          name: 'DiederIT - Archief',
          meta: {
            isRoot: false,
            title: 'Dieder.IT - Archief',
          },
        },
        {
          path: '/appeldoorn-riooltechniek-archive',
          name: 'Appeldoorn Riooltechniek - Archief',
          meta: {
            isRoot: false,
            title: 'Appeldoorn Riooltechniek - Archief',
          },
        },
      ],
    },
  ];

  const pinned = ref(!mobile.value);

  const showWebsites = ref(false);
  const websites = ref([]);

  const route = ref();

  const showProfileOverlay = ref(false);

  const darkColor = ref(true);

  const drawer = ref(false);

  const defaultRoutes = [
    {
      icon: 'mdi-home',
      name: 'Home',
      to: { name: 'Home' },
    },
    {
      icon: 'mdi-office-building',
      name: 'Uit Best',
      to: { name: 'Uit Best' },
    },
    {
      icon: 'mdi-web',
      name: 'Website overzicht',
      to: { name: 'Websites' },
    },
  ];

  watch(
    route,
    (newRoute) => {
      if (newRoute?.path === '/websites') {
        showWebsites.value = true;
      }
    },
    { immediate: true }
  );

  watch(
    mobile,
    (value) => {
      drawer.value = !value;
    },
    { immediate: true }
  );

  onMounted(() => {
    const websitesRoute = routes.find((route) => route.name === 'Websites');

    websitesRoute.children.forEach((website) => {
      if (website.meta?.sidebar) {
        websites.value.push(website.meta.sidebar);
      }
    });
  });
</script>
