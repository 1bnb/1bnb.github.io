<script lang='ts' setup>
import cb3 from "vue-clipboard3";
const { toClipboard } = cb3();
function onCopy(text: string) {
    toClipboard(text);
    alert(`${text} Copied successfully!`)
}
</script>

<template>
    <section class="text-gray-600 body-font" style="min-height: calc(100vh - 60px);">
        <div class="container lg:px-20 px-5 pt-36 pb-10 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 class="title-font font-medium text-3xl text-gray-300 capitalize">It's my honor to welcome you in my
                    blog.</h1>
                <p class="leading-relaxed mt-4">We attach great importance to the interaction and communication with peers,
                    so we specially set up this "Contact Us" page. You are always welcome to follow us on social media to
                    get more up-to-date information and news. Thank you for your support and trust in my blog. We look
                    forward to establishing a long-term and pleasant cooperation with you.</p>
            </div>
            <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Contant Us</h2>
                <div class="relative mb-4">
                    <label for="full-name" class="leading-7 text-sm text-gray-600">Auther Name</label>
                    <input type="text" id="full-name" name="full-name" placeholder="Allen" readonly
                        class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" placeholder="h660@foxmail.com" readonly
                        class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button
                    class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                    @click="onCopy('h660@foxmail.com')">Copy Email</button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
        </div>
    </section>
</template>

<style lang='less' scoped></style>
