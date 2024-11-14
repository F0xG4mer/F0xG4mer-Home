<script setup lang="ts">
function redirectTo(site: string) {
  switch (site) {
    case 'dc': { window.open("https://discord.gg/T4gygECyG8"); break; }
    case 'x': { window.open("https://x.com/f0xg4mer"); break; }
    case 'git': { window.open("https://github.com/f0xg4mer/"); break; }
    case 'yt': { window.open("https://www.youtube.com/@F0xG4mer"); break; }
    case 'kofi': { window.open("https://ko-fi.com/f0xg4mer"); break; }

  }
}
</script>
<template>
    <div class="m-auto p-64 text-blue-white flex justify-center">
        <div class="text-center flex flex-col w-4/6">
            <p class="text-4xl font-extrabold text-shadow-5">Social Media</p>
            <p class="text-2xl text-purple-500 font-semibold text-shadow-5">Follow me here!</p>
            <div class="social-media-container flex justify-around w-full mt-20 backdrop-brightness-50 p-5">
                <button class="icon-button" @click="redirectTo('dc')">
                    <img src="/icons/discord.svg" alt="discord" draggable="false" class="no-select">
                </button>
                <button class="icon-button" @click="redirectTo('yt')">
                    <img src="/icons/youtube.svg" alt="youtube" draggable="false" class="no-select">
                </button>
                <button class="icon-button" @click="redirectTo('x')">
                    <img src="/icons/x.svg" alt="x" draggable="false" class="no-select">
                </button>
                <button class="icon-button" @click="redirectTo('git')">
                    <img src="/icons/github.svg" alt="github" draggable="false" class="no-select">
                </button>
                <button class="icon-button" @click="redirectTo('kofi')">
                    <img src="/icons/kofi.svg" alt="kofi" draggable="false" class="no-select">
                </button class="icon-button">
            
            </div>
        </div>
    </div>

</template>