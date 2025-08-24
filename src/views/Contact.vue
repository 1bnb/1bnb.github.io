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
        <div class="container lg:px-20 px-5 pt-[30vh] pb-10 mx-auto flex flex-col justify-between">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 class="title-font font-medium text-4xl text-gray-300 capitalize mb-8">Welcome to contract us.</h1>
                <p class="text-purple-500 text-xl m-2"><span class="text-sm">✦</span> E-mail: h660@foxmail.com</p>
                <p class="text-purple-500 text-xl m-2"><span class="text-sm">✦</span> Wechat: uba988</p>

            </div>
            <div class="w-full flex justify-end gap-4 mt-36">
                <button
                    class="w-[150px] text-white border-0 bg-gray-800 py-1 px-4 focus:outline-none hover:bg-gray-700 rounded-full text-lg"
                    @click="onCopy('h660@foxmail.com')">Copy E-mail</button>
                <button
                    class="w-[150px] text-white bg-purple-500 border-0 py-1 px-4 focus:outline-none hover:bg-purple-600 rounded-full text-lg"
                    @click="onCopy('uba988')">Copy Wechat</button>
            </div>
        </div>
    </section>
</template>

<style lang='less' scoped></style>
