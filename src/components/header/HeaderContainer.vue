<template>
    <div id="header">
        <HeaderLogo/>
        <div class="nav-n-profile">
            <NavigationBlock/>
            <UserProfile 
                @toogle-drop-down="openDropDown"
                :user-in="userIn"
                :user-id="userId"/>
            <HeaderHamburgerLines 
                @toggle-menu="onHamburger"
                :on-menu="isMenuOpen"/>
        </div>
        <HamburgerNavigationMenu 
            @close-hamburger="onHamburger"
            @click-out-side-hamburger="closeHamburger"
            :on-menu="isMenuOpen"/>
        <HeaderDropMenuProfile 
            @open-login="$emit('open-login')"
            @open-register="$emit('open-register')"
            @open-profile="$emit('open-profile')"
            @log-out="$emit('log-out')"
            @click-out-side-drop-menu="closeDropMenu"
            :on-drop-down.sync="isDropDown"
            :user-in="userIn"
            :user-id="userId"
            />
    </div>
</template>

<script>
import HeaderLogo from '@/components/header/HeaderLogo.vue'
import NavigationBlock from '@/components/header/NavigationBlock.vue'
import UserProfile from '@/components/header/UserProfile.vue'
import HeaderHamburgerLines from '@/components/header/header-tablet/HeaderHamburgerLines.vue'
import HamburgerNavigationMenu from '@/components/header/header-tablet/HeaderNavigationMenu.vue'
import HeaderDropMenuProfile from '@/components/header/HeaderDropMenuProfile.vue'

export default {
    components: {
        HeaderLogo,
        NavigationBlock,
        UserProfile,
        HeaderHamburgerLines,
        HamburgerNavigationMenu,
        HeaderDropMenuProfile
    },
    props: {
        userIn: {
            type: Boolean,
            default: false
        },
        userId: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            isMenuOpen: false,
            isDropDown: false,
        }
    },
    methods: {
        onHamburger() {
            this.isMenuOpen = !this.isMenuOpen
            this.isDropDown = false
        },
        openDropDown() {
            this.isDropDown = !this.isDropDown
            this.isMenuOpen = false
        },
        closeHamburger() {
            this.isMenuOpen = false
        },
        closeDropMenu() {
            this.isDropDown = false
        }
    },
}
</script>

<style lang="scss" scoped>
#header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: $dark;
}

.nav-n-profile {
    display: flex;
    align-items: center;
    gap: 40px;
}
</style>