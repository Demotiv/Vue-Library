<template>
    <div id="coffee-shop">
        <Responsive :breakpoints="{
            tablet: el => el.width <= 768
        }">
            <TitleComponent slot-scope="el"
                :title="coffeeShop.title"
                :p="el.is.tablet ? coffeeShop.pTablet : coffeeShop.pDesktop"/>
        </Responsive>
        <div class="coffee-shop__menu">
            <CoffeeShopDrinks/>
            <CoffeeShopDesserts/>
        </div>
    </div>
</template>

<script>
import TitleComponent from '@/components/shared/TitleComponent.vue'
import CoffeeShopDrinks from  './CoffeeShopDrinks.vue'
import CoffeeShopDesserts from './CoffeeShopDesserts.vue'
import { Responsive } from 'vue-responsive-components'

export default {
    components: {
        TitleComponent,
        CoffeeShopDrinks,
        CoffeeShopDesserts,
        Responsive
    },
    data() {
        return {
            coffeeShop: {
                title: 'Coffee shop',
                pDesktop: `In our library, we have of cozy coffee shop, 
                    welcoming in customers with frothy cappuccinos and 
                    friendly conversation. 
                    <br> 
                    You can get a favorite book and read in coffee shop. 
                    Our barista to cook you best coffee, 
                    and also you can try desserts
                    <br> 
                    from bakery.`,
                pTablet: `In our library, we have of cozy coffee shop, welcoming 
                    in&nbsp;<br> 
                    customers with frothy cappuccinos and friendly conversation. 
                    <br> 
                    You can get a favorite book and read in coffee shop. 
                    Our barista 
                    <br> 
                    to cook you best coffee, and also you can try desserts from 
                    <br> 
                    bakery.`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#coffee-shop {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.coffee-shop__menu {
    display: flex;
    justify-content: space-between;

    @include tablet {
        flex-direction: column;
        gap: 40px;
    }
}
</style>