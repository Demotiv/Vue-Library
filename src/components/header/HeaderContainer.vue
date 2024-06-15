<template>
    <div id="header">
        <HeaderLogo/>
        <div class="nav-n-profile">
            <NavigationBlock/>
            <UserProfile/>
            <HeaderHamburgerLines @toggle-menu="onHamburger"/>
        </div>
        <HamburgerNavigationMenu :on-menu="isMenuOpen"/>
    </div>
</template>

<script>
import HeaderLogo from '@/components/header/HeaderLogo.vue'
import NavigationBlock from '@/components/header/NavigationBlock.vue'
import UserProfile from '@/components/header/UserProfile.vue'
import HeaderHamburgerLines from '@/components/header/header-tablet/HeaderHamburgerLines.vue'
import HamburgerNavigationMenu from '@/components/header/header-tablet/HeaderNavigationMenu.vue'

export default {
    components: {
        HeaderLogo,
        NavigationBlock,
        UserProfile,
        HeaderHamburgerLines,
        HamburgerNavigationMenu
    },

    data() {
        return {
            isMenuOpen: false,
        }
    },

    methods: {
        onHamburger() {
            this.isMenuOpen = !this.isMenuOpen
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

HeaderHamburger {
    display: none;
}
</style>