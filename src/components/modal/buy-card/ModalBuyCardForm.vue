<template>
    <div class="buy-card-form-wrapper">
        <form 
            action="#" 
            method="get"
            @submit="handleClick"
            class="buy-card-form-wrapper__form">
            <div class="buy-card-form-wrapper__bank-card">
                <label for="bank-card-number">{{ formInfo.cardNumber }}</label>
                <input 
                    type="text" 
                    id="bank-card-number"
                    name="bank-card-number"
                    pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
                    required>
    
                <div class="buy-card-form-wrapper__expiration">
                    <label 
                        for="expiration-code-month expiration-code-year">{{ formInfo.expiration }}</label>
                    <div class="buy-card-form-wrapper__expiration_input">
                        <input
                            type="text"
                            id="expiration-code-month"
                            name="expiration-code-month"
                            pattern="[0-9]{2}"
                            required>
                        <input 
                            type="text"
                            id="expiration-code-year"
                            name="expiration-code-year"
                            pattern="[0-9]{2}"
                            required>
                    </div>
                </div>
    
                <label for="cvc">{{ formInfo.cvc }}</label>
                <input 
                    type="text" 
                    id="cvc"
                    name="cvc" 
                    pattern="[0-9]{3}"
                    required
                    class="buy-card-form-wrapper__cvc">
            </div>
                
            <div class="buy-card-form-wrapper__cardholder-info">
                <label for="cardholder-name">{{ formInfo.cardholder }}</label>
                <input 
                    type="text" 
                    id="cardholder-name"
                    name="cardholder-name" 
                    required>
    
                <label for="postal-code">{{ formInfo.postalCode }}</label>
                <input 
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    required>
    
                <label for="city-town">{{ formInfo.city }}</label>
                <input 
                    type="text"
                    id="city-town"
                    name="city-town"
                    required>
            </div>
            <div class="buy-card-form-wrapper__buy">
                <button>{{ formInfo.button }}</button>
                <span>{{ formInfo.price }}</span>
            </div>
        </form>
    </div>
</template>

<script>
import { updateUserData } from '@/storage'

export default {
    props: {
        userId: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            formInfo: {
                cardNumber: 'Bank card number',
                expiration: 'Expiration code',
                cvc: 'CVC',
                cardholder: 'Cardholder name',
                postalCode: 'Postal code',
                city: 'City / Town',
                button: 'Buy',
                price: '$ 25.00'
            },
            bankInfo: {}
        }
    },
    methods: {
        handleClick(event) {
            event.preventDefault()

            const form = event.target
            const formData = new FormData(form)

            this.bankInfo = Object.fromEntries(formData.entries())

            const updatedUserId = { ...this.userId, bankInfo: this.bankInfo }

            updateUserData(updatedUserId)

            this.$emit('close-buy-card')

            this.$emit('update-new-user-id', updatedUserId)

            form.reset()
        }
    }
}
</script>

<style lang="scss" scoped>
.buy-card-form-wrapper {
    max-width: 200px;
    font-family: $inter;
    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    letter-spacing: 0.02em;
    color: $black;

    & input {
        border: 1px solid $sand;
    }
    
    &__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    & input {
        height: 20px;
    }

    &__bank-card {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__expiration {
        display: flex;
        flex-direction: column;
        gap: 10px;

        & input {
            width: 45px;
        }
    }

    &__expiration_input {
        display: flex;
        gap: 10px;
    }

    &__cvc {
        width: 45px;
    }

    &__cardholder-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__buy {
        display: flex;
        gap: 25px;
        align-items: center;

        font-weight: 700;
        letter-spacing: 0.1em;
        color: $dark;

        & button {
            border: 1px solid $dark;
            border-radius: 2px;
            width: 75px;
            height: 30px;
            font-size: 10px;
            text-align: center;
        }

        & span {
            font-weight: 700;
            font-size: 20px;
            line-height: 100%;
            text-transform: uppercase;
        }
    }
}
</style>