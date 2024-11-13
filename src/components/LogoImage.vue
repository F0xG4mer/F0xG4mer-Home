<script setup lang="ts">
import { Motion } from "@oku-ui/motion"
</script>

<template>
            <div class="bg-logo bg-no-repeat bg-contain h-64">
            </div>
    <Motion 
        :initial="false"
        :animate="{ y: 100 }" />
</template>
