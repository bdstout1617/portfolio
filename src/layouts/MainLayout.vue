<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-custom font-zelda">
        <q-icon name="fa-solid fa-terminal"></q-icon>
        <q-toolbar-title>Brandon Stout</q-toolbar-title>
        <q-space/>
        <q-btn stretch flat label="Home" to="/" />
        <q-separator dark vertical />
        <!-- <q-btn stretch flat label="About" to="/about" /> -->
        <!-- <q-separator dark vertical /> -->
        <q-btn stretch flat label="Resume" to="/resume" />
        <q-separator dark vertical />
        <!-- <q-btn stretch flat disable label="Contact" to="/contact" /> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-space/>
        <sub class="font-zelda" style="font-size: 10px;">
          Quasar v{{ $q.version }} | Vue v3.5
        </sub>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">

</script>
