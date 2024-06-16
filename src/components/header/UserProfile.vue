<template>
    <div class="user-profile" @click="toogleDropDown">
        <img 
            :src="image.src" 
            :alt="image.alt">
    </div>
</template>

<script>
import img from '@/assets/img/header/icon-profile.png'

export default {
    data() {
        return {
            image: {
            src: img,
            alt: 'icone-profile'
            }
        }
    },
    methods: {
        toogleDropDown() {
            this.$emit('toogle-drop-down')
        }
    }
}
</script>

<style lang="scss" scoped>
.user-profile {
    z-index: 3;
    cursor: pointer;
}
</style>