<script lang='ts' setup>
import Particles from '../components/Particles.vue';

</script>

<template>
    <Particles />
    <section class="text-gray-400 bg-gray-950 body-font lg:px-20" style="min-height: calc(100vh - 60px);">
        <div class="container mx-auto flex px-5 pt-24 pb-10 md:flex-row flex-col items-center relative z-10">
            <div
                class="title_ lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white capitalize">
                    Welcome to my blog!
                </h1>
                <p class="mb-8 leading-relaxed">This is a spaceship exploring the frontiers of technology and sharing
                    innovative thinking. Here, I will deeply explore the latest developments in the technology industry
                    and
                    show you the endless charm of technology, including but not limited to cutting-edge technologies
                    such as
                    artificial intelligence, blockchain, and cloud computing. Together, we will cross every boundary of
                    the
                    digital world and explore how technology shapes our future.
                </p>
                <div class="flex justify-center">
                    <button
                        class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                        <router-link to="/case">Web3 Case</router-link></button>
                    <button
                        class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        <router-link to="/about">About Me</router-link>
                    </button>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 grid place-items-center">
                <img class="circle_ object-cover object-center rounded " alt="hero" src="../assets/planet.png">
            </div>
        </div>
    </section>
</template>

<style lang='less' scoped>
.circle_ {
    animation: rotate 120s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>