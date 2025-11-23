<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8">
        <!-- Name and Contact Information -->
        <div class="text-center q-my-lg zelda-border">
          <div class="text-h2 q-mb-sm gradient-text font-zelda">
            <TriforceIcon
              :size="70"
            />
            {{ resumeData.contact.name }}
            <TriforceIcon
              :size="70"
            />
          </div>
          <div class="text-body1 text-primary font-zelda text-md">
            {{ resumeData.contact.email }} | {{ resumeData.contact.phone }} | {{ resumeData.contact.location }}
          </div>
        </div>

        <!-- About Me Section -->
        <div class="q-my-md zelda-border">
          <div class="text-h5 q-mb-sm text-primary font-zelda">About Me</div>
          <q-separator class="q-mb-md" />
          <p class="text-body2 font-kode">{{ resumeData.aboutMe }}</p>
        </div>

        <!-- Skillsets Section -->
        <div class="q-mb-md zelda-border" v-if="resumeData.skillsets && resumeData.skillsets.length > 0">
          <div class="text-h5 q-mb-md text-primary font-zelda">Technical Skills</div>
          <q-separator class="q-mb-md" />
          <div 
            v-for="(category, index) in resumeData.skillsets" 
            :key="index" 
            class="q-mb-md"
          >
            <div 
              class="text-body1 q-mb-sm font-kode"
              style="font-size: 18px;"
            >
              {{ category.category }}
            </div>
            <div class="q-gutter-sm">
              <q-chip
                v-for="(skill, skillIndex) in category.skills"
                :key="skillIndex"
                color="primary"
                text-color="white"
                :label="skill.name"
                size="md"
                :icon="getSkillIcon(skill)"
              />
            </div>
            <q-separator v-if="index < resumeData.skillsets.length - 1" class="q-mt-md" />
          </div>
        </div>

        <!-- Work Experience Summary -->
        <div class="zelda-border">
          <div class="text-h5 q-mb-md text-primary font-zelda">Work Experience</div>
          <q-separator class="q-mb-md" />
          <div v-for="(experience, index) in resumeData.workExperience" :key="index" class="q-mb-lg">
            <div class="row items-start q-mb-sm">
              <div class="col">
                <div class="text-h6 font-kode">{{ experience.position.join(' | ') }}</div>
                <div class="text-subtitle1 text-grey-7">{{ experience.company }}</div>
                <div class="text-caption text-grey-6 q-mt-xs">{{ formatDate(experience.startDate) }} - {{ formatDate(experience.endDate) }}</div>
              </div>
            </div>
            <p class="text-body3 q-mt-sm">{{ experience.summary }}</p>
            <q-list 
              v-if="experience.achievements && experience.achievements.length > 0" 
              dense 
              class="q-mt-sm"
            >
              <q-item 
                v-for="(achievement, achievementIndex) in experience.achievements" 
                  :key="achievementIndex"
                >
                <q-item-section avatar class="text-secondary">
                  <q-icon name="fa-solid fa-play" size="md" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-body3">{{ achievement }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-separator v-if="index < resumeData.workExperience.length - 1" class="q-mt-md" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TriforceIcon from 'src/components/TriforceIcon.vue';
import { resumeData } from '../data/resume';
import type { Skill } from '../data/resume';

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}

function getSkillIcon(skill: Skill){
  if(skill.icon?.startsWith('http')){
    return `img:${skill.icon}`
  } else {
    return `fa-solid ${skill.icon}`
  }
}

</script>
