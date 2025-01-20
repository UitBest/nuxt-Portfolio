import type { RouterConfig } from '@nuxt/schema'

const Home = () => import('~/pages/home.vue');
const UitBest = () => import('~/pages/uit-best.vue');
const Apps = () => import('~/pages/apps.vue');
const Websites = () => import('~/pages/websites.vue');
const FramazonCRM = () => import('~/pages/app-previews/framazon-crm.vue');
const SnapshotApp = () => import('~/pages/app-previews/snapshot-app.vue');

export default {
    routes: (_routes) => [
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                isRoot: true,
                title: 'Home',
            },
        },
        {
            path: '/uit-best',
            name: 'Uit Best',
            component: UitBest,
            meta: {
                isRoot: true,
                title: 'Uit Best',
            },
        },
        {
          path: '/apps',
            name: 'Apps',
            component: Apps,
            meta: {
              isRoot: true,
                title: 'Apps',
            },
            children: [
                {
                    path: '/apps/framazon',
                    name: 'Framazon CRM',
                    component: FramazonCRM,
                    meta: {
                        isRoot: false,
                        title: 'Framazon CRM',
                        sidebar: {
                            icon: 'mdi-cart',
                            name: 'Framazon CRM',
                            to: { name: 'Framazon CRM' },
                        },
                    }
                },
                {
                    path: '/apps/snapshot-app',
                    name: 'Snapshot App',
                    component: SnapshotApp,
                    meta: {
                        isRoot: false,
                        title: 'Snapshot App',
                        sidebar: {
                            icon: 'mdi-camera',
                            name: 'Snapshot App',
                            to: { name: 'Snapshot App' },
                        },
                    },
                },
            ]
        },
        {
            path: '/websites',
            name: 'Websites',
            component: Websites,
            meta: {
                isRoot: true,
                title: 'Websites',
            },
            children: [
                {
                    path: '/van-gestel-inspecties',
                    name: 'Van Gestel Inspecties',
                    component: Websites,
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
                    component: Websites,
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
                    component: Websites,
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
                    component: Websites,
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
                    component: Websites,
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
                {
                    path: '/beauty-education',
                    name: 'Beauty Education',
                    component: Websites,
                    meta: {
                        title: 'Beauty Education',
                        isRoot: false,
                        sidebar: {
                            icon: 'mdi-brush',
                            name: 'Beauty Education',
                            to: { name: 'Beauty Education' },
                        },
                    },
                },

                // Archive

                {
                    path: '/van-gestel-inspecties-archive',
                    name: 'Van Gestel Inspecties - Archief',
                    component: Websites,
                    meta: {
                        title: 'Van Gestel Inspecties - Archief',
                        isRoot: false,
                    },
                },
                {
                    path: '/dieder-it-archive',
                    name: 'DiederIT - Archief',
                    component: Websites,
                    meta: {
                        isRoot: false,
                        title: 'Dieder.IT - Archief',
                    },
                },
                {
                    path: '/appeldoorn-riooltechniek-archive',
                    name: 'Appeldoorn Riooltechniek - Archief',
                    component: Websites,
                    meta: {
                        isRoot: false,
                        title: 'Appeldoorn Riooltechniek - Archief',
                    },
                },
            ],
        },
    ],
} satisfies RouterConfig