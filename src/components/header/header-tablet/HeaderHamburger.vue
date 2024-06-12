<template>
    <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {
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

        & div {
            border: 1px solid $white;
            width: 45px;
            height: 0px;
        }
    }
}
</style>