<template>
    <div>
        <HeaderContainer/>
        <WelcomeContainer/>
        <AboutContainer/>
        <FavoritesContainer/>
        <CoffeeShopContainer/>
        <ContactsContainer/>
        <LibraryCardContainer/>
        <FooterContainner/>
    </div>
</template>

<script>
import HeaderContainer from '@/components/header/HeaderContainer.vue'
import WelcomeContainer from '@/components/welcome/WelcomeContainer.vue'
import AboutContainer from '@/components/about/AboutContainer.vue'
import FavoritesContainer from '@/components/favorites/FavoritesContainer.vue'
import CoffeeShopContainer from '@/components/coffeeShop/CoffeeShopContainer.vue'
import ContactsContainer from '@/components/contacts/ContactsContainer.vue'
import LibraryCardContainer from '@/components/library-card/LibraryCardContainer.vue'
import FooterContainner from '@/components/footer/FooterContainer.vue'

export default {
    components: {
        HeaderContainer,
        WelcomeContainer,
        AboutContainer,
        FavoritesContainer,
        CoffeeShopContainer,
        ContactsContainer,
        LibraryCardContainer,
        FooterContainner
    }
}
</script>

<style lang="scss" scoped>
</style>