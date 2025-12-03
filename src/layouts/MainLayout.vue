<template>
  <q-layout view="lHh Lpr lFf" :class="`theme-${currentTheme} ${currentTheme === 'zelda' ? 'font-zelda' : 'font-professional'}`">
    <q-drawer v-model="drawer" side="right" overlay behavior="mobile">
      <q-list>
        <q-item clickable v-close-popup to="/">
          <q-item-section avatar>
            <q-icon name="fas fa-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup to="/resume">
          <q-item-section avatar>
            <q-icon name="fas fa-file-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Resume</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-header elevated>
      <q-toolbar class="bg-custom" :class="currentTheme === 'zelda' ? 'font-zelda' : 'font-professional'">
        <q-icon name="fa-solid fa-terminal"></q-icon>
        <q-toolbar-title>Brandon Stout</q-toolbar-title>
        <q-space class="gt-sm"/>
        <!-- Desktop navigation -->
        <q-btn stretch flat label="Home" to="/" class="gt-sm" />
        <q-separator dark vertical class="gt-sm" />
        <q-btn stretch flat label="Resume" to="/resume" class="gt-sm" />
        <!-- Mobile hamburger menu -->
        <q-btn flat round dense @click="drawer = !drawer" class="lt-md">
          <q-icon name="fas fa-bars" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-btn flat round dense @click="toggleTheme" :icon="currentTheme === 'professional' ? 'fas fa-wand-sparkles' : 'fas fa-clipboard'" size="sm" />
        <q-space/>
        <sub :class="currentTheme === 'zelda' ? 'font-zelda' : 'font-professional'" style="font-size: 10px;">
          Quasar v{{ $q.version }} | Vue v3.5
        </sub>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { ref } from 'vue'

const { currentTheme, toggleTheme } = useTheme()
const drawer = ref(false)
</script>
