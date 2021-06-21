<template>
    <div id="app">
        <TheHeader v-if="$route.matched.some(({ name }) => name !== 'Home')"></TheHeader>
        <router-view />
        <TheFooter v-if="$route.matched.some(({ name }) => name !== 'Home')"></TheFooter>
    </div>
</template>

<script>
    import TheHeader from '@/components/TheHeader.vue'
    import TheFooter from '@/components/TheFooter.vue'

    export default {
        components: {
            TheHeader,
            TheFooter
        }
    }
</script>

<style>
    #app {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-image: url("assets/img/background.jpg");
    }
</style>