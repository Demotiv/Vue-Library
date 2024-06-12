<template>
    <div class="desserts">
        <h3 class="desserts__title">{{ title }}</h3>
        <div class="desserts__line">
            <h4 class="desserts__drink-name">{{ line1.drink }}</h4>
            <div class="desserts__decor-line"></div>
            <div class="desserts__prise">{{ line1.price }}</div>
        </div>
        <div class="desserts__line">
            <h4 class="desserts__drink-name">{{ line2.drink }}</h4>
            <div class="desserts__decor-line"></div>
            <div class="desserts__prise">{{ line2.price }}</div>
        </div>
        <div class="desserts__line">
            <h4 class="desserts__drink-name">{{ line3.drink }}</h4>
            <div class="desserts__decor-line"></div>
            <div class="desserts__prise">{{ line3.price }}</div>
        </div>
        <div class="desserts__line">
            <h4 class="desserts__drink-name">{{ line4.drink }}</h4>
            <div class="desserts__decor-line"></div>
            <div class="desserts__prise">{{ line4.price }}</div>
        </div>
        <div class="desserts__line">
            <h4 class="desserts__drink-name">{{ line5.drink }}</h4>
            <div class="desserts__decor-line"></div>
            <div class="desserts__prise">{{ line5.price }}</div>
         </div>
        <div class="desserts__line">
            <h4 class="desserts__drink-name">{{ line6.drink }}</h4>
            <div class="desserts__decor-line"></div>
            <div class="desserts__prise">{{ line6.price }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Desserts & Cakes',
            line1: {
                drink: 'Forest Gateau',
                price: '$16'
            },
            line2: {
                drink: 'Blue Moon',
                price: '$16'
            },
            line3: {
                drink: 'Truffle Cake',
                price: '$15'
            },
            line4: {
                drink: 'Chocolate Cake',
                price: '$18'
            },
            line5: {
                drink: 'Poet’s Dream Cake',
                price: '$16'
            },
            line6: {
                drink: 'Pineapple Cake',
                price: '$14'
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.desserts {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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