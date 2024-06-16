<template>
    <transition name="slide">
        <div class="hamburger-navigation" v-if="onMenu">
            <NavigationBlock/>
        </div>
    </transition>
</template>

<script>
import NavigationBlock from '@/components/header/NavigationBlock.vue'

export default {
    components: {
        NavigationBlock,
    },
    props: {
        onMenu: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.hamburger-navigation {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    z-index: 2;
    background-color: $black;

    ::v-deep .navigation {
        ul {
            margin: 100px 107px 100px 107px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease;
    transform: translateY(0);
}

.slide-enter,
.slide-leave-to {
    transition: transform 0.5s ease;
    transform: translateY(-100%);
}
</style>