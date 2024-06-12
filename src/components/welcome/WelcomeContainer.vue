<template>
    <div id="welcome">
        <WelcomeBackground/>
        <WelcomeTitle/>
    </div>
</template>

<script>
import WelcomeBackground from '@/components/welcome/WelcomeBackground.vue'
import WelcomeTitle from '@/components/welcome/WelcomeTitle.vue'

export default {
    components: {
        WelcomeBackground,
        WelcomeTitle,
    }
}
</script>

<style lang="scss" scoped>
#welcome {
    position: relative;
    bottom: 1px;
    min-height: 600px;
    background-image: url('/public/img/welcome/welcome.png');
    background-position: center;
    background-size: cover;
}
</style>