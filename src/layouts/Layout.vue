<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="absolute-center">
          Todo list
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="(nav) in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"/>
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>

        <q-item
          v-for="(nav) in navs"
          :key="nav.label"
          :icon="nav.icon"
          :to="nav.to"
          exact
          clickable
        >
          <q-item-section
            avatar
          >
            <q-icon :name="nav.icon"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>


    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        },
        {
          label: 'About',
          icon: 'info',
          to: '/about',
        }
      ]
    }
  }
})
</script>

<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
