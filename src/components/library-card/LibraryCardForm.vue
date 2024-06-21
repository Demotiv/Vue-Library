<template>
    <div class="library-form">
        <h2 class="library-form__title">{{ findCard.title }}</h2>
        <form action="#" 
            method="get" 
            class="form" 
            id="find-card-form"
            @submit="handleCheck">
            <fieldset>
                <div class="form__wrapper">
                    <legend class="form__title">{{ form.title }}</legend>
                    <div class="form__input-wrapper">
                        <input type="text" 
                            id="name" 
                            name="full-name"
                            pattern="[a-zA-Z ]+" 
                            placeholder="Reader's name"
                            class="form__input"
                            :style="isValidInput ? { color: 'rgb(187, 148, 95)' } : {}">
                        <label for="name"></label>
                    </div>
                    <div class="form__input-wrapper">
                        <input type="text" 
                            id="cardNumber" 
                            name="card-number" 
                            pattern="[a-zA-Z0-9]{1,9}" 
                            placeholder="Card number"
                            class="form__input"
                            :style="isValidInput ? { color: 'rgb(187, 148, 95)' } : {}">
                        <label for="cardNumber"></label>
                    </div>
                </div>
                <LibraryCardVisitsInfo 
                    v-if="showVisits"
                    :visits-info="visitsInfo"/>
                <button v-else>{{ form.button }}</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
import LibraryCardVisitsInfo from '@/components/library-card/LibraryCardVisitsInfo.vue'
import { getUserByCardNumber } from '@/storage'
import { getUserByFullName } from '@/storage'

export default {
    components: {
        LibraryCardVisitsInfo
    },
    props: {
        userIn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            findCard: {
                title: 'Find your Library card'
            },
            form: {
                title: 'Brooklyn Public Library',
                button: 'Check the card'
            },
            showVisits: false,
            isValidInput: false,
            visitsInfo: {
                type: Object,
                default: () => ({})
            }
        }
    },
    methods: {
        onVisits() {
            this.showVisits = !this.showVisits
        },
        onValidinput() {
            this.isValidInput = !this.isValidInput
        },
        showVisitInfo(cardNumber) {
            this.visitsInfo = {
                visitsCounter: cardNumber.visitsCounter,
                bonusesCounter: cardNumber.bonuses,
                booksCounter: cardNumber.books
            }
        },
        handleCheck(event) {
            event.preventDefault()

            const form = event.target
            const formData = new FormData(form)
            const userData = Object.fromEntries(formData.entries())

            const userCardNumber = getUserByCardNumber(userData['card-number'])
            const userFullName = getUserByFullName(userData['full-name'])?.fullName

            if (!this.userIn) {
                if (userCardNumber.cardNumber === userData['card-number'] && userFullName === userData['full-name']) {
                    this.onVisits()
                    this.onValidinput()
                    this.showVisitInfo(userCardNumber)

                    setTimeout(() => {
                        this.onVisits()
                        this.onValidinput()
                        form.reset()
                    }, 10000)
                }
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

    &__input {
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

    &__input--valid {
        color: $sand;
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