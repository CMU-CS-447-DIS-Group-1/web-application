<template>
    <div class="navside">
        <div class="navside-item">
            <router-link :to="{name : 'ChonMon', params: { code: this.$route.params.code }}" :active="$route.matched.some(({ name }) => name === 'ChonMon')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Chọn Món</span>
            </router-link>
        </div>
        <div class="navside-item">
            <router-link :to="{name : 'HoaDon', params: { code: this.$route.params.code }}" :active="$route.matched.some(({ name }) => name === 'HoaDon')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span>Hoá đơn</span>
            </router-link>
        </div>
    </div>
</template>
<style>
    .navside {
        position: fixed;
        top: 50%;
        left: 0px;
        height: auto;
        width: auto;
        color: #000;
        background-color: white;
        z-index: 1000;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

    .navside-item {
        padding: 6px 4px;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid;
    }
    .navside-item:first-child {
        border-bottom: none;
    }
    .navside-item svg {
        width: 24px;
        height: 24px;
    }
    .navside-item a {
        text-decoration: none;
    }
    .navside-item > a[active=true] {
        font-weight: bold;
    }
</style>