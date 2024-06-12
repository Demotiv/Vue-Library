<template>
    <div id="coffee-shop">
        <TitleComponent 
            :title="coffeeShop.title" 
            :p="coffeeShop.p"/>
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

export default {
    components: {
        TitleComponent,
        CoffeeShopDrinks,
        CoffeeShopDesserts
    },
    data() {
        return {
            coffeeShop: {
                title: 'Coffee shop',
                p: ''
            },
            windowWidth: 0
        }
    },
    mounted() {
        this.windowWidth = window.innerWidth
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    watch: {
    windowWidth(newWidth) {
      if (newWidth <= 768) {
        this.coffeeShop.p = `In our library, we have of cozy coffee shop, welcoming 
            in&nbsp;<br>
            customers with frothy cappuccinos and friendly conversation. 
            <br>
            You can get a favorite book and read in coffee shop. 
            Our barista 
            <br> 
            to cook you best coffee, and also you can try desserts from 
            <br>
            bakery.`
      } else {
        this.coffeeShop.p = `In our library, we have of cozy coffee shop, 
            welcoming in customers with frothy cappuccinos and friendly conversation. 
            <br>
            You can get a favorite book and read in coffee shop. Our barista to 
            cook you best coffee, and also you can try desserts from bakery.`
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