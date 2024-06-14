<template>
    <div class="book">
        <div class="book__info">
            <div class="book__header">
                <h3>{{ staff }}</h3>
                <div></div>
            </div>
            <section class="book__body">
                <div class="book__title-n-author">
                    <h4 class="book__title">{{ book.title }}</h4>
                    <p class="book__author">{{ book.author }}</p>
                </div>
                <div class="book__text">
                    <p>{{ book.p }}</p>
                </div>
                <button class="book__button">Buy</button>
            </section>
        </div>
        <img 
            class="book__img" 
            :src="img.src" 
            :alt="img.alt">
    </div>
</template>

<script>
export default {
    props: {
        staff: {
            type: String,
            required: true
        },
        book: {
            type: Object,
            required: true
        },
        img: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.book {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 590px;
    height: max-content;

    &__info {
        display: flex;
        flex-direction: column;
        width: 550px;
        min-height: 555px;
        border: 1px solid $black;
    }

    &__header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 14px 0 0 19px;

        & h3 {
            font-family: $forum;
            font-weight: 400;
            font-size: 20px;
            line-height: 200%;
            letter-spacing: 0.1em;
            text-transform: capitalize;
            color: $black;
        }

        & div {
            border: 1px solid $sand;
            width: 60px;
            height: 0px; 
        }
    }

    &__body {
        margin: 20px 0 0 19px;
        display: flex;
        flex-direction: column;
    }

    &__title-n-author {
        font-family: $inter;
        font-weight: 700;
        font-size: 15px;
        line-height: 267%;
        letter-spacing: 0.13em;
        color: $black;

        & h4 {
            text-transform: uppercase;
        }

        & p {
            text-transform: capitalize;
        }
    }

    &__text {
        margin-top: 20px;
        max-width: 355px;

        & p {
            font-family: $inter;
            font-size: 15px;
            line-height: 267%;
            letter-spacing: 0.13em;
            color: $black;
            min-height: 320px;
            text-transform: capitalize;
        }
    }

    &__button {
        margin-top: 15px;
        margin-bottom: 14px;
        width: 75px;
        height: 30px;
        font-family: $inter;
        font-weight: bold;
        font-size: 10px;
        letter-spacing: 0.1em;
        color: $dark;
        background-color: $white;
        border: 1px solid $dark;
        border-radius: 2px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: $sand;
        }
    }

    &__img {
        position: absolute;
        right: 0%;
        bottom: 0%;
        width: 200px;
        height: 300px;
    }
}
</style>