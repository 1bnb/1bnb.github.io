<script lang='ts' setup>

</script>

<template>
    <section class="text-gray-600 body-font">
        <div class="container lg:px-20 px-5 pt-20 pb-10 mx-auto flex flex-wrap">
            <div class="title_ lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-hidden grid place-items-center">
                <img alt="feature" class="object-cover object-center -mt-24" src="../assets/personal.png"
                    style="width:580px">
            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 text-left">
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div
                        class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div class="flex-grow">
                        <h2 class="text-gray-300 text-lg title-font font-medium mb-3 capitalize">Personal Profile</h2>
                        <p class="leading-relaxed text-base">
                            Hey, I'm a Web3 engineer with 7 years of experience, having worked on both front-end and
                            back-end development. Currently, I'm deeply interested in AI and Web3, constantly exploring and
                            discovering new technologies and algorithms.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div
                        class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="flex-grow">
                        <h2 class="text-gray-300 text-lg title-font font-medium mb-3 capitalize">Skills & Experience</h2>
                        <p class="leading-relaxed text-base">Personal technology stack includes python, golang, next.js,
                            solidity, vue3, react, uniapp, echarts, rabbitMQ, redis, mysql, mongodb, using Django and gin
                            back-end framework, AI framework mastering numpy, pandas, svm, NLP, openCV , tensorFlow,
                            pytorch, etc.</p>
                    </div>
                </div>
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div
                        class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                    </div>
                    <div class="flex-grow">
                        <h2 class="text-gray-300 text-lg title-font font-medium mb-3 capitalize">Work Achievement</h2>
                        <p class="leading-relaxed text-base">Developed 5 Defi projects, 2 blockchain systems, 3 official
                            websites, 6 small program projects, mastered distributed high-concurrency solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='less' scoped>
@media screen and (max-width: 640px) {
    .title_ {
        margin-top: 60px;
    }
}
</style>
