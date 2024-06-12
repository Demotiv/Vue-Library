<template>
    <div class="title">
        <h2 class="title__h2">{{ title }}</h2>
        <div class="title__line"></div>
        <p v-if="p" class="title__p" v-html="p"></p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        p: {
            type: String,
            required: false,
            default: ''
        },
    }
}
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    &__h2 {
        font-family: $forum;
        font-weight: 400;
        font-size: 40px;
        line-height: 100%;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: $dark;
    }

    &__line {
        width: 50px;
        height: 1px;
        background: $dark;
    }

    &__p {
        padding-top: 20px;
        font-family: $inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 200%;
        text-align: center;
        color: $black;
    }
}
</style>