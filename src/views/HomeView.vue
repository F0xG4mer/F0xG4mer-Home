<script setup lang="ts">
import SocialMedia from '@/components/SocialMedia.vue';
import CoverImage from '../components/CoverImage.vue';
</script>

<template>
  <CoverImage />

  <div class="absolute left-1/2 bottom-12"  v-motion :delay="250" :initial="{
    y: -50,
    opacity: 0
  }" :enter="{
    y: 0,
    opacity: 1
  }">

    <div v-motion :delay="250" :initial="{
      y: 0
    }" :enter="{
    y: -30,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 750,
      ease: 'easeInEaseOut'
    },
  }">
      <font-awesome-icon class="text-white" :icon="['fas', 'arrow-down']" size="4x" />
    </div>
  </div>

  <SocialMedia/>

  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>

  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>

  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>

  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>


  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>
  <h1>content</h1>

</template>
