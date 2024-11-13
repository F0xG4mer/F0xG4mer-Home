<script setup lang="ts">
import LogoImage from './LogoImage.vue';
</script>

<template>
    <div class="h-screen
    bg-fixed bg-parallax bg-cover cover-image lg:p-72 md:p-44 sm:p-7">
    <div class="w-3/4">
        <div class="grid grid-rows-2 grid-cols-1 w-8/12 min-w-96">
            <div class="content h-fit row-start-1">
                <LogoImage/>
            </div>
            <div class="ms-3 row-start-2"><p class="text-white text-lg font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut sapiente cum, cupiditate id officia accusamus accusantium dicta fugiat! Doloribus repellat, animi aliquid dolore dolorum delectus qui alias sapiente culpa!</p> </div>
            
        </div>
    </div>
</div>
</template>