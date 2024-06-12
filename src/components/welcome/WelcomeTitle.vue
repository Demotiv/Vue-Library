<template>
    <div class="welcome-title">
        <h2 v-html="title"></h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: `Welcome <br> to the Brooklyn <br> Library`
        }
    }    
}
</script>

<style lang="scss" scoped>
.welcome-title {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 220px;
    margin-top: 220px;
    font-family: $forum;
    font-size: 40px;
    line-height: 125%;
    letter-spacing: 0.07em;
    color: $white;
    text-align: center;
    text-transform: uppercase;
    background-color: $dark;
}
</style>