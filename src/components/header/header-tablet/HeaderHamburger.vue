<template>
    <div 
        class="hamburger"
        @click="toggleMenu">
        <span class="hamburger__line" :class="{ 'active': onMenu }"></span>
        <span class="hamburger__line" :class="{ 'active': onMenu }"></span>
        <span class="hamburger__line" :class="{ 'active': onMenu }"></span>
    </div>
</template>

<script>
export default {
    data() {
        return{
            onMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.onMenu = !this.onMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.hamburger {
    display: none;

    @include tablet {
        display: flex;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;

        &__line {
            border: 1px solid $white;
            width: 45px;
            height: 0px;
            transition: transform 0.3s ease, opacity 0.3s ease;

            &.active:nth-child(1) {
                transform: translateY(12px) rotateZ(45deg);
            }

            &.active:nth-child(2) {
                opacity: 0;
            }

            &.active:nth-child(3) {
                transform: translateY(-12px) rotateZ(-45deg);
            }
        }
    }
}
</style>