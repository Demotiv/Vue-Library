<template>
    <div class="home">
        <HeaderContainer 
            @open-login="showLogin"
            @open-register="showRegister"
            @log-out="handleUserIn"
            :user-in="user.userIn"
            :user-id="user.userId"/>
        <WelcomeContainer/>
        <AboutContainer :is-tablet="isTablet"/>
        <FavoritesContainer/>
        <CoffeeShopContainer/>
        <ContactsContainer/>
        <LibraryCardContainer
            @open-login="showLogin"
            @open-register="showRegister"/>
        <FooterContainner/>
        <ModalBackDrop :backDrop="backDrop"/>
        <ModalLogin 
            @close-login="closeLogin"
            :loginModal="loginModal"
            @toggle-modal="toggleModal"
            @user-in="handleUserIn"/>
        <ModalRegister
            @close-register="closeRegister"
            :registerModal="registerModal"
            @toggle-modal="toggleModal"
            @user-in="handleUserIn"/>
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
            isTablet: false,
            backDrop: false,
            loginModal: false,
            registerModal: false,
            user: {
                userIn: false, 
                userId: {
                    type: Object,
                    require: true
                }
            }
        }
    },
    created() {
        this.checkWindowsSize()
        window.addEventListener('resize', this.checkWindowsSize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkWindowsSize)
    },
    methods: {
        checkWindowsSize() {
            this.isTablet = window.innerWidth <= 768
        },
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
        },
        toggleModal(modal) {
            this.loginModal = modal === 'login'
            this.registerModal = modal === 'register'
        },
        handleUserIn(userId) {
            this.user.userIn = !this.user.userIn
            this.user.userId = userId
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    position: relative;
}
</style>