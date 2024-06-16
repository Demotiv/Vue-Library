<template>
    <div id="header">
        <HeaderLogo/>
        <div class="nav-n-profile">
            <NavigationBlock/>
            <UserProfile @toogle-drop-down="onDropDown"/>
            <HeaderHamburgerLines 
                @toggle-menu="onHamburger"
                :on-menu="isMenuOpen"/>
        </div>
        <HamburgerNavigationMenu :on-menu="isMenuOpen"/>
        <HeaderDropMenuProfile :on-drop-down="isDropDown"/>
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
        onDropDown() {
            this.isDropDown = !this.isDropDown
            this.isMenuOpen = false
        }
    }
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

/*
HeaderHamburger {
    display: none;
}
*/

</style>