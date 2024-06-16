<template>
    <div class="library-form">
        <h2 class="library-form__title">{{ findCard.title }}</h2>
        <form action="#" 
            method="get" 
            class="form" 
            id="find-card-form">
            <fieldset>
                <div class="form__wrapper">
                    <legend class="form__title">{{ form.title }}</legend>
                    <div class="form__input-wrapper">
                        <input type="text" 
                            id="name" 
                            name="full-name"
                            pattern="[a-zA-Z ]+" 
                            placeholder="Reader's name">
                        <label for="name"></label>
                    </div>
                    <div class="form__input-wrapper">
                        <input type="text" 
                            id="cardNumber" 
                            name="card-number" 
                            pattern="[a-zA-Z0-9]{1,9}" 
                            placeholder="Card number">
                        <label for="cardNumber"></label>
                    </div>
                </div>
                <button @click.prevent>{{ form.button }}</button>
            </fieldset>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            findCard: {
                title: 'Find your Library card'
            },
            form: {
                title: 'Brooklyn Public Library',
                button: 'Check the card'
            }
        }
    }    
}
</script>

<style lang="scss" scoped>
.library-form {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__title {
        font-family: $inter;
        font-weight: 400;
        font-size: 30px;
        letter-spacing: 0.02em;
        color: $black;
    }

    @include tablet {
        align-items: center;
    }
}

.form {
    display: flex;
    justify-content: center;
    width: 600px;
    height: 386px;
    border: 3px solid $sand;

    & fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__wrapper {
        padding: 20px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 560px;
        height: 272px;
        background: $sand;
    }

    &__title {
        font-family: $forum;
        font-weight: 400;
        font-size: 30px;
        line-height: 167%;
        letter-spacing: 0.02em;
        color: $black;
    }

    &__input-wrapper {
        margin-bottom: 5px;
    }

    & input {
        padding-left: 20px;
        width: 520px;
        height: 66px;
        font-family: $forum;
        font-weight: 400;
        font-size: 30px;
        line-height: 167%;
        letter-spacing: 0.02em;
        color: $grey;
        border-radius: 10px;
        border: none;
    }

    & button {
        margin-top: 20px;
        width: 242px;
        height: 44px;
        font-family: $inter;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 0.05em;
        color: $dark;
        border: 1px solid $dark;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: $sand;
        }
    }
}
</style>