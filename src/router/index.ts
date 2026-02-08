import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeaturesIndexView from '../views/features/FeaturesIndexView.vue'
import ReactivityView from '../views/features/ReactivityView.vue'
import CompositionApiView from '../views/features/CompositionApiView.vue'
import SfcView from '../views/features/SfcView.vue'
import BundleSizeView from '../views/features/BundleSizeView.vue'
import EcosystemView from '../views/features/EcosystemView.vue'
import ProgressiveView from '../views/features/ProgressiveView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/features',
      name: 'features',
      component: FeaturesIndexView,
    },
    {
      path: '/features/reactivity',
      name: 'features-reactivity',
      component: ReactivityView,
    },
    {
      path: '/features/composition-api',
      name: 'features-composition-api',
      component: CompositionApiView,
    },
    {
      path: '/features/sfc',
      name: 'features-sfc',
      component: SfcView,
    },
    {
      path: '/features/bundle-size',
      name: 'features-bundle-size',
      component: BundleSizeView,
    },
    {
      path: '/features/ecosystem',
      name: 'features-ecosystem',
      component: EcosystemView,
    },
    {
      path: '/features/progressive',
      name: 'features-progressive',
      component: ProgressiveView,
    },
  ],
})

export default router
