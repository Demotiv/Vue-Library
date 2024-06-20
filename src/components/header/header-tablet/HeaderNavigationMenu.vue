<template>
    <transition name="slide">
        <div 
            class="hamburger-navigation" 
            v-if="onMenu"
            v-clickaway="closeHamburger">
            <NavigationBlock @close-hamburger="$emit('close-hamburger')"/>
        </div>
    </transition>
</template>

<script>
import NavigationBlock from '@/components/header/NavigationBlock.vue'
import { directive as Clickaway } from 'vue-clickaway'

export default {
    directives: {
        Clickaway
    },
    components: {
        NavigationBlock,
    },
    props: {
        onMenu: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onLink() {
            this.$emit('onLink')
            console.log('click nav')
        },
        closeHamburger() {
            if (this.onMenu) {
                this.$emit('click-out-side-hamburger')
            }
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