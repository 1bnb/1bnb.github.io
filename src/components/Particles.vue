<template>
    <div class="login-bg">
        <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
            :options="data.options" />
    </div>
</template>
<script lang="ts" setup>
import { loadFull } from "tsparticles"
import { reactive } from "vue";

const data = reactive({
    options: {
        fpsLimit: 100,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.6,
                    size: 10,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 60,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: 3,
            },
        },
        detectRetina: true,
    },
})

// 粒子效果
const particlesInit = async (engine: any) => {
    await loadFull(engine)
}
const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container)
}
</script>
<style lang="less" scoped>
/**放置背景图片 */
</style>