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
            @open-register="showRegister"
            :user-in="user.userIn"/>
        <FooterContainner/>
        <ModalBackDrop :backDrop="backDrop"/>
        <ModalLogin 
            @close-login="closeLogin"
            @toggle-modal="toggleModal"
            @user-in="handleUserIn"
            @click-out-side-login-modal="closeLoginToClick"
            :loginModal="loginModal"/>
        <ModalRegister
            @close-register="closeRegister"
            @toggle-modal="toggleModal"
            @user-in="handleUserIn"
            @click-out-side-register-modal="closeRegisterToClick"
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
        },
        closeLoginToClick() {
            this.loginModal = false
            this.backDrop = false
        },
        closeRegisterToClick() {
            this.registerModal = false
            this.backDrop = false
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    position: relative;
}
</style>