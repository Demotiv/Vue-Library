<template>
    <div class="home">
        <HeaderContainer 
            :user-in="user.userIn"
            :user-id="user.userId"
            @open-login="showLogin"
            @open-register="showRegister"
            @open-profile="showProfile"
            @log-out="handleUserIn"/>
        <WelcomeContainer/>
        <AboutContainer :is-tablet="isTablet"/>
        <FavoritesContainer 
            :user-in="user.userIn"
            :user-id="user.userId"
            @update-new-user-id="updateNewUserId"
            @open-login="showLogin"
            @open-buy-card="showBuyCard"/>
        <CoffeeShopContainer/>
        <ContactsContainer/>
        <LibraryCardContainer
            :user-in="user.userIn"
            :user-id="user.userId"
            @open-profile="showProfile"
            @open-login="showLogin"
            @open-register="showRegister"/>
        <FooterContainner/>
        <ModalBackDrop :backDrop="backDrop"/>
        <ModalLogin 
            :login-modal="loginModal"
            @close-login="closeLogin"
            @toggle-modal="toggleModal"
            @user-in="handleUserIn"
            @click-out-side-login-modal="closeLoginToClick"/>
        <ModalRegister
            :register-modal="registerModal"
            @close-register="closeRegister"
            @toggle-modal="toggleModal"
            @user-in="handleUserIn"
            @click-out-side-register-modal="closeRegisterToClick"/>
        <ModalProfileContainer 
            :user-id="user.userId"
            :user-in="user.userIn"
            :profile-modal="profileModal"
            @close-profile="closeProfile"
            @click-out-side-profile="closeProfileToClick"/>
        <ModalBuyCardContainer
            :user-id="user.userId"
            :buy-card-modal="buyCardModal"
            @close-buy-card="showBuyCard"
            @click-out-side-buy-card="closeBuyCardModalToClick"
            @update-new-user-id="updateNewUserId"/>
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
import ModalProfileContainer from '@/components/modal/profile/ModalProfileContainer.vue'
import ModalBuyCardContainer from '@/components/modal/buy-card/ModalBuyCardContainer.vue'

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
        ModalRegister,
        ModalProfileContainer,
        ModalBuyCardContainer
    },
    data() {
        return {
            isTablet: false,
            backDrop: false,
            loginModal: false,
            registerModal: false,
            profileModal: false,
            buyCardModal: false,
            user: {
                userIn: false, 
                userId: {
                    type: Object,
                    default: () => ({})
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
        updateNewUserId(newUserId) {
            this.user.userId = newUserId
        },
        checkWindowsSize() {
            this.isTablet = window.innerWidth <= 768
        },
        showLogin() {
            this.loginModal = !this.loginModal
            this.backDrop = !this.backDrop
        },
        showProfile() {
            this.profileModal = !this.profileModal
            this.backDrop = !this.backDrop
        },
        showRegister() {
            this.registerModal = !this.registerModal
            this.backDrop = !this.backDrop
        },
        showBuyCard() {
            this.buyCardModal = !this.buyCardModal
            this.backDrop = !this.backDrop
        },
        closeLogin() {
            this.loginModal = !this.loginModal
            this.backDrop = !this.backDrop
        },
        closeProfile() {
            this.profileModal = !this.profileModal
            this.backDrop = false
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
        },
        closeProfileToClick() {
            this.profileModal = false
            this.backDrop = false
        },
        closeBuyCardModalToClick() {
            this.buyCardModal = false
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