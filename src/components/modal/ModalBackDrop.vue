<template>
    <transition name="descent">
        <div class="backdrop" v-if="backDrop"/>
    </transition>
</template>

<script>
export default {
    props: {
        backDrop: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
}

.descent-enter-active,
.descent-leave-active {
    transition: opacity 0.5s ease;
    opacity: 1;
}

.descent-enter,
.descent-leave-to {
    transition: opacity 0.5s ease;
    opacity: 0;
}
</style>