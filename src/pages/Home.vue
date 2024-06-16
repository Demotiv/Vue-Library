<template>
    <div class="home">
        <HeaderContainer 
            @open-login="showLogin"
            @open-register="showRegister"/>
        <WelcomeContainer/>
        <AboutContainer/>
        <FavoritesContainer/>
        <CoffeeShopContainer/>
        <ContactsContainer/>
        <LibraryCardContainer/>
        <FooterContainner/>
        <ModalBackDrop :backDrop="backDrop"/>
        <ModalLogin 
            @close-login="closeLogin"
            :loginModal="loginModal"/>
        <ModalRegister
            @close-register="closeRegister"
            :registerModal="registerModal"/>
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
import ModalBackDrop from '@/components/modal/ModalBackDrop.vue'
import ModalLogin from '@/components/modal/ModalLogin.vue'
import ModalRegister from '@/components/modal/ModalRegister.vue'

export default {
    components: {
        HeaderContainer,
        WelcomeContainer,
        AboutContainer,
        FavoritesContainer,
        CoffeeShopContainer,
        ContactsContainer,
        LibraryCardContainer,
        FooterContainner,
        ModalBackDrop,
        ModalLogin,
        ModalRegister
    },
    data() {
        return {
            backDrop: false,
            loginModal: false,
            registerModal: false
        }
    },
    methods: {
        showLogin() {
            this.loginModal = !this.loginModal
            this.backDrop = !this.backDrop
        },
        showRegister() {
            this.registerModal = !this.registerModal
            this.backDrop = !this.backDrop
        },
        closeLogin() {
            this.loginModal = !this.loginModal
            this.backDrop = !this.backDrop
        },
        closeRegister() {
            this.registerModal = !this.registerModal
            this.backDrop = !this.backDrop
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    position: relative;
}
</style>