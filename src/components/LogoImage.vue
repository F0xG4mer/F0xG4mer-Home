<script setup lang="ts">

</script>

<template>
        <div class="bg-logo bg-no-repeat bg-contain h-64 logo-glow logo" 
                v-motion 
                :delay="400"
                :initial="{
                        opacity: 0,
                        y: -100,
                }" 
                :enter="{
                opacity: 1,
                y: 0,
                }"
                >
        </div>
</template>
