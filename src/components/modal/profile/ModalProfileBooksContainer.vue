<template>
    <div class="books-wrapper">
        <h3>{{ title }}</h3>
        <ul class="books-wrapper__list">
            <li v-for="(book, index) in userId.selectedBooks"
            :key="index">
            {{ book.titleBooks }}, {{ book.authorBook }}
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        userId: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            title: 'Rented books'
        }
    }
}
</script>

<style lang="scss" scoped>
.books-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;

    & h3 {
        font-family: $inter;
        font-weight: 400;
        font-size: 25px;
        line-height: 80%;
        color: $dark;
    }
    &__list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 20px;
        list-style: disc;
        font-family: $inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: capitalize;
        color: $black;
    }
}
</style>