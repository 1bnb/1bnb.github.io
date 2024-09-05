<script lang='ts' setup>
import Staknet from "../assets/staknet.png"
import Stakeriod from "../assets/stakeriod.png"
import Stakempu from "../assets/stakempu.png"
import Stakerunes from "../assets/stakerunes.png"
import Oslor from "../assets/oslor.png"
import Audit from "../assets/audit.png"
import otc_1 from "../assets/otc_1.png"
import otc_2 from "../assets/otc_2.png"
import otc_3 from "../assets/otc_3.png"
import otc_4 from "../assets/otc_4.png"
import trading_1 from "../assets/trading_1.png"
import trading_2 from "../assets/trading_2.png"

const data = [{
    title: "Four Blockchain Defi Project",
    content: "I have written 4 blockchain financial projects. They are all adaptive projects for computer and mobile terminals. The backend is connected to Ethereum, supports login to Little Fox Wallet and other wallets, and provides users with efficient and convenient blockchain services.",
    photo: [
        { id: 1, name: "staknet website", photo: Staknet },
        { id: 2, name: "stakeriod website", photo: Stakeriod },
        { id: 3, name: "stakempu website", photo: Stakempu },
        { id: 4, name: "stakerunes website", photo: Stakerunes },
    ]
}, {
    title: "One Blockchain official website",
    content: "I wrote an official blockchain website, which includes wallet login, token minting, supply chain query, balance, authorization, and other related functions.",
    photo: [
        { id: 1, name: "Oslor website", photo: Oslor },
    ]
}, {
    title: "One Contract Audit Website",
    content: "I wrote a contract audit website that can audit the security of smart contracts, token concentration, blacklist functions, proxy contracts, whether it is a Pixiu, honeypot, etc.",
    photo: [
        { id: 1, name: "Audit website", photo: Audit },
    ]
}, {
    title: "One OTC exchange",
    content: "I have developed a comprehensive and efficient OTC (Over-The-Counter) exchange platform, which focuses on providing a safe, transparent and flexible trading environment for various financial assets. It aims to connect buyers and sellers around the world and promote the efficient circulation and trading of non-standardized financial products. At the same time, it integrates advanced blockchain technology and smart contract functions to enhance the trust and automation level of transactions and meet the diversified and personalized trading needs of the market.",
    photo: [
        { id: 1, name: "OTC website", photo: otc_1 },
        { id: 2, name: "OTC website", photo: otc_2 },
        { id: 3, name: "OTC website", photo: otc_3 },
        { id: 4, name: "OTC website", photo: otc_4 },
    ]
}, {
    title: "One Perpetual Contract Exchange",
    content: "I have developed an innovative perpetual contract trading platform that integrates advanced trading systems, risk management mechanisms and user-friendly interface design, tailored for professional investors and traders who seek efficient and flexible trading experience. The platform supports multiple cryptocurrencies as margin and provides 24/7 uninterrupted trading services, allowing global users to seamlessly access and participate in high-leverage, non-expiration perpetual contract transactions. By introducing deep liquidity pools, high-speed trading engines and smart contract technology, we ensure the rapid execution of transactions, secure storage of funds and automatic execution of contract terms, creating a safe and vibrant perpetual contract trading ecosystem for users.",
    photo: [
        { id: 1, name: "Perpetual Contract", photo: trading_1 },
        { id: 2, name: "Perpetual Contract", photo: trading_2 },
    ]
}]


</script>

<template>
    <section class="text-gray-500 body-font h-full">
        <div v-for="(items, index) in data" :key="index" class="container lg:px-20 px-5 pt-24 mx-auto">
            <div class="title_ w-full mb-5">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300 capitalize">{{ items.title }}
                </h1>
                <p class="w-full leading-relaxed text-gray-500 text-left">{{ items.content }}</p>
            </div>
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div v-for="item in items.photo" :key="item.id" class="sm:w-1/2 mb-10 px-4">
                    <div class="rounded-lg overflow-hidden">
                        <img alt="content" class="object-cover object-center h-full w-full" :src=item.photo>
                    </div>
                    <h2 class="title-font text-2xl font-medium text-gray-300 mt-6 mb-3 capitalize">{{ item.name }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='less' scoped>
.after_::after {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    inset: 1px;
}
</style>
