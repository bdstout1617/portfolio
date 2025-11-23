<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="text-center q-my-lg zelda-border">
          <div class="text-h2 q-mb-sm gradient-text font-zelda">
            Resume
          </div>
          <q-separator class="q-mb-md" />
          <div class="font-kode">
            <p>This page provides options to download my resume. The PDF format is ideal for human readability, offering a traditional view of my qualifications. The JSON format is provided for programmatic parsing, allowing tools and applications to easily extract and process my professional information.</p>
          </div>
          <q-separator class="q-mb-md" />
          <div class="q-gutter-xl">
            <q-btn
              size="lg"
              label="Download Resume (PDF)"
              type="a"
              href="/resumes/Brandon Stout Resume.pdf"
              target="_blank"
              color="primary"
              icon="fa-solid fa-download"
            />
            <q-btn
              label="Download Resume (JSON)"
              size="lg"
              type="a"
              :href="resumeJsonHref"
              target="_blank"
              :download="`${resumeData.contact.name}.json`"
              color="secondary"
              icon="fa-solid fa-download"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { resumeData } from '../data/resume';

const resumeJsonHref = "data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(resumeData));


</script>

