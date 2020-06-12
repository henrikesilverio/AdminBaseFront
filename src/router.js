import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: () => import('@/views/authentication/Index'),
      children: [
        {
          name: 'Login',
          path: '',
          component: () => import('@/views/authentication/pages/Login'),
          meta: {
            guest: true,
          },
        },
        {
          name: 'NewPassword',
          path: '/new-password',
          component: () => import('@/views/authentication/pages/NewPassword'),
          meta: {
            guest: true,
          },
        }
      ]
    },
    {
      path: '/a',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '/dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.auth)) {
//     if (store.state.isLogin) {
//       next();
//     } else {
//       next({
//         path: "/",
//       });
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (store.state.isLogin) {
//       next({
//         path: "/profile",
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
export default router
