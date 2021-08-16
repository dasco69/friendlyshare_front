import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e7e456c = () => interopDefault(import('../pages/user/albums.vue' /* webpackChunkName: "pages/user/albums" */))
const _953faa40 = () => interopDefault(import('../pages/user/chat.vue' /* webpackChunkName: "pages/user/chat" */))
const _58206562 = () => interopDefault(import('../pages/user/documentation.vue' /* webpackChunkName: "pages/user/documentation" */))
const _5d52e772 = () => interopDefault(import('../pages/user/updates.vue' /* webpackChunkName: "pages/user/updates" */))
const _207f96e0 = () => interopDefault(import('../pages/user/videos.vue' /* webpackChunkName: "pages/user/videos" */))
const _72ae4f56 = () => interopDefault(import('../pages/user/_albums/_id.vue' /* webpackChunkName: "pages/user/_albums/_id" */))
const _394540d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/user/albums",
    component: _4e7e456c,
    name: "user-albums"
  }, {
    path: "/user/chat",
    component: _953faa40,
    name: "user-chat"
  }, {
    path: "/user/documentation",
    component: _58206562,
    name: "user-documentation"
  }, {
    path: "/user/updates",
    component: _5d52e772,
    name: "user-updates"
  }, {
    path: "/user/videos",
    component: _207f96e0,
    name: "user-videos"
  }, {
    path: "/user/:albums?/:id?",
    component: _72ae4f56,
    name: "user-albums-id"
  }, {
    path: "/",
    component: _394540d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
