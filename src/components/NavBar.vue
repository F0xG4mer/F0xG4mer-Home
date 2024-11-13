<script setup lang="ts">
</script>


<template>
    <div class="fixed text-white 
    text-xl
    font-semibold
    flex flex-row justify-around  
    w-2/5 right-0 top-4 p-4
    backdrop-blur-lg backdrop-brightness-50 navbar" v-motion :delay="250" :initial="{
        opacity: 0,
        x: 100,
    }" :enter="{
                    opacity: 1,
                    x: 0,
                }">
        <div>
            <router-link active-class="active" :to="{ name: 'home' }">
                <button class="flex gap-3 nav-button">
                    <font-awesome-icon :icon="['fas', 'home']" size="lg" />
                    <span>Home</span>
                </button>
            </router-link>
        </div>
        <div class="flex gap-3">
            <router-link active-class="active" :to="{ name: 'projects' }">

                <button class="flex gap-3 nav-button">
                    <font-awesome-icon :icon="['fas', 'archive']" size="lg" />
                    <span>Projects</span>
                </button>
            </router-link>
        </div>
        <div class="flex gap-3">
            <router-link active-class="active" :to="{ name: 'models' }">

                <button class="flex gap-3 nav-button">
                    <font-awesome-icon :icon="['fas', 'cubes']" size="lg" />
                    <span>Models</span>
                </button>
            </router-link>
        </div>
        <div class="flex gap-3">
            <router-link active-class="active" :to="{ name: 'contact' }">
                <button class="flex gap-3 nav-button">
                    <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                    <span>Contact</span>
                </button>
            </router-link>
        </div>
    </div>
</template>