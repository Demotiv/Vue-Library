<template>
    <div class="title">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Buy a library card'
        }
    }    
}
</script>

<style lang="scss" scoped>
.title {
    background-color: $black;

    & h2 {
        padding: 20px 143px 20px 143px;
        font-family: $forum;
        font-weight: 400;
        font-size: 40px;
        line-height: 50%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
        color: $white;
    }
}
</style>