<template>
    <div class="drinks">
        <h3 class="drinks__title">{{ title }}</h3>
        <div class="drinks__line">
            <h4 class="drinks__drink-name">{{ line1.drink }}</h4>
            <div class="drinks__decor-line"></div>
            <div class="drinks__prise">{{ line1.price }}</div>
        </div>
        <div class="drinks__line">
            <h4 class="drinks__drink-name">{{ line2.drink }}</h4>
            <div class="drinks__decor-line"></div>
            <div class="drinks__prise">{{ line2.price }}</div>
        </div>
        <div class="drinks__line">
            <h4 class="drinks__drink-name">{{ line3.drink }}</h4>
            <div class="drinks__decor-line"></div>
            <div class="drinks__prise">{{ line3.price }}</div>
        </div>
        <div class="drinks__line">
            <h4 class="drinks__drink-name">{{ line4.drink }}</h4>
            <div class="drinks__decor-line"></div>
            <div class="drinks__prise">{{ line4.price }}</div>
        </div>
        <div class="drinks__line">
            <h4 class="drinks__drink-name">{{ line5.drink }}</h4>
            <div class="drinks__decor-line"></div>
            <div class="drinks__prise">{{ line5.price }}</div>
         </div>
        <div class="drinks__line">
            <h4 class="drinks__drink-name">{{ line6.drink }}</h4>
            <div class="drinks__decor-line"></div>
            <div class="drinks__prise">{{ line6.price }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Coffee & Tea',
            line1: {
                drink: 'Cold Brew Coffee',
                price: '$3'
            },
            line2: {
                drink: 'French Press Pot',
                price: '$5'
            },
            line3: {
                drink: 'Espresso',
                price: '$2'
            },
            line4: {
                drink: 'Cappuccino',
                price: '$4'
            },
            line5: {
                drink: 'Hot tea',
                price: '$2'
            },
            line6: {
                drink: 'Cold tea',
                price: '$2'
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.drinks {
    display: flex;
    flex-direction: column;
    gap: 40px;

    &__title {
        font-family: $forum;
        font-weight: 400;
        font-size: 40px;
        line-height: 100%;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: $sand;
    }

    &__line {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    &__drink-name {
        min-width: 196px;
        font-family: $inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 200%;
        letter-spacing: 0.1em;
        text-transform: capitalize;
        color: $black;
    }

    &__decor-line {
        border: 1px solid $sand;
        width: 100px;
        height: 0px;
    }

    &__price {
        font-family: $forum;
        font-weight: 400;
        font-size: 20px;
        line-height: 200%;
        letter-spacing: 0.1em;
        text-transform: capitalize;
        color: $black;
    }
}
</style>